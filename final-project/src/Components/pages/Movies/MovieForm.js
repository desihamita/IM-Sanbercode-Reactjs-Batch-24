import React, {useState, useEffect, useContext} from "react"
import {Form, Input, InputNumber, Button} from "antd"
import TextArea from 'antd/lib/input/TextArea';
import axios from "axios"
import { useParams, useHistory} from "react-router-dom"
import { UserContext} from "../../../Context/UserContext"

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 16,
    offset: 3,
  },
};

const MovieForm = () =>{
  const [movie, setMovie] = useState(null)
  const [user,setUser] = useContext(UserContext)
  let yearNow = new Date().getFullYear()
  let {id} = useParams()
  let history = useHistory()

  useEffect( () => {
    if (id) {
      fetchData()
    }else {
      setMovie({
        title: "", 
        description: "", 
        review: "",
        year : 2020,
        duration : "",
        rating : 0,
        image_url : "",
        genre: ""
    });
    }
  }, [])

  const fetchData = async () => {
    const res = await axios.get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
    let el = res.data
    setMovie({
      id: el.id,
      key: el.id,
      title: el.title, 
      description: el.description, 
      year: el.year, 
      duration: el.duration, 
      genre: el.genre, 
      rating: el.rating, 
      review: el.review, 
      image_url: el.image_url
    });
  }
  const onFinish = () => {
    if( id === undefined ){
        axios.post(`https://backendexample.sanbersy.com/api/data-movie`, {
          title: movie.title, 
          genre: movie.genre,
          duration: movie.duration,
          rating: movie.rating,
          year: movie.year,
          description: movie.description,
          review: movie.review,
          image_url: movie.image_url   
        },{headers: {"Authorization" : "Bearer "+ user.token}})
        alert("Berhasil Ditambahkan!")
        history.push('/movie/create')
      }else{
        axios.put(`https://backendexample.sanbersy.com/api/data-movie/${id}`, {
          title: movie.title, 
          genre: movie.genre,
          duration: movie.duration,
          rating: movie.rating,
          year: movie.year,
          description: movie.description,
          review: movie.review,
          image_url: movie.image_url
        },{headers: {"Authorization" : "Bearer "+ user.token}})
        alert("Berhasil DiEdit!")
        history.push('/movie/create')     
      }
      setMovie({
        title: '', 
        description: '', 
        review: '',
        year : 0,
        duration : 2020,
        rating : 0,
        image_url : '',
        genre: ''
      })
    console.log('Success:');
  };

  const handleChange = (event) =>{
    const nama = event.target.name
    const value = event.target.value
    setMovie({...movie, [nama] : value})
  }

  const handleChangeYear = (value) =>{
    setMovie({...movie, year : parseInt(value)})
  }

  const handleChangeDuration = (value) =>{
    setMovie({...movie, duration : parseInt(value)})
  }

  const handleChangeRating = (value) =>{
    setMovie({...movie, rating : parseInt(value)})
  }

  console.log(movie)

  return (
    <>
    {movie !== null && (
        <div className="site-layout-background" style={{ padding: 24 }}>
        <div className="article">
            <h1 style={{fontSize:"xx-large", textAlign:"center"}}><b>Form Movie</b></h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{ 
                  title: movie.title, 
                  genre: movie.genre,
                  duration: movie.duration,
                  rating: movie.rating,
                  year: movie.year,
                  description: movie.description,
                  review: movie.review,
                  image_url: movie.image_url
                 }}
                onFinish={onFinish}
                >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input movie title!' }]}
                >
                    <Input name="title" value={movie.title} onChange={handleChange} placeholder="Your Movie Title"/>
                </Form.Item>
                <Form.Item
                    label="Genre"
                    name="genre"
                    rules={[{ required: true, message: 'Please input movie genre!' }]}
                >
                    <Input name="genre" value={movie.genre} onChange={handleChange} placeholder="Your Movie Genre"/>
                </Form.Item>
                <Form.Item
                    label="Duration(in Minute)"
                    name="duration"
                    rules={[{ type:'number', required: true, message: 'Please input movie duration in minute!' }]}
                >
                    <Form.Item name="duration" noStyle>
                        <InputNumber name="duration" value={movie.duration} onChange={handleChangeDuration} min={0}  placeholder="0"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label="Rating(min 0 max 10)"
                    name="rating"
                    rules={[{ type:'number', required: true, message: 'Please input movie rating!' }]}
                >
                    <Form.Item name="rating" noStyle>
                        <InputNumber name="rating" value={movie.rating} onChange={handleChangeRating} min={0} max={10} placeholder="0"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label="Year"
                    name="year"
                    rules={[{ type:'number', required: true, message: 'Please input year of movies been release!' }]}
                >
                    <Form.Item name="year" noStyle>
                        <InputNumber name="year" value={movie.year} onChange={handleChangeYear} min={1955} max={yearNow} placeholder="1955"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input movie Description!' }]}
                >
                    <TextArea name="description" value={movie.description} onChange={handleChange} placeholder="Your Movie Description"/>
                </Form.Item>
                <Form.Item
                    label="Review"
                    name="review"
                    rules={[{ required: true, message: 'Please input movie Review!' }]}
                >
                    <TextArea name="review" value={movie.review} onChange={handleChange} placeholder="Your Movie Review"/>
                </Form.Item>
                <Form.Item
                    label="Image Url"
                    name="image_url"
                    rules={[{ required: true, message: 'Please input movie Cover!' }]}
                >
                    <TextArea name="image_url" value={movie.image_url} onChange={handleChange} placeholder="Your Movie Cover"/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
      </div>
    )}
  </>
  )
}

export default MovieForm
