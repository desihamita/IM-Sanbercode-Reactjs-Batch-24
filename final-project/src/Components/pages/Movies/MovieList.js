import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import { Table, Button, Input } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {UserContext} from "../../../Context/UserContext"
const { Search } = Input;

const MovieList = () => {
  let history = useHistory()
  const [movie, setMovie] = useState([])
  const [user,setUser] = useContext(UserContext)
  const [fetch, setFetch] = useState(true)
  let token = user ?  user.token : null
    
  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
      setMovie(
        result.data.map(el=> {
          return {
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
          }})
      )
    }
    if(fetch){
      fetchData()
      setFetch(false)
    }
  },[fetch])

  const handleDelete = (event) =>{
    let id = parseInt(event.target.value)
    console.log(id)
    axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${id}`, {headers: {"Authorization" : "Bearer "+ token}})
    .then(() => {
      let newMovie = movie.filter(el=> {return el.id !== id})
      setMovie(newMovie)
      alert("Berhasil DiHapus!")
    }).catch((err)=>{
      alert(JSON.stringify(err.response.data))
    })
  }

  const onSearch = (value, event) => {
    event.preventDefault()
    axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
    .then(res => {
      let resMovie = res.data.map(el=>{ return {
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
      }
      })

      let filteredMovie = resMovie.filter(x=> x.title.toLowerCase().indexOf(value.toLowerCase()) !== -1)
      setMovie([...filteredMovie])
    })
  }

  const createNewData = ()=>{
    history.push('/movie-data/create')
  }

  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'duration',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'review',
      dataIndex: 'review',
      key: 'review',
    },
    {
      title: 'Action',
      key: 'action',
      render: (item) => (
        <>
          <Button onClick={()=> { history.push(`/movie-data/edit/${item.id}`)}} >Edit</Button>
          <Button onClick={handleDelete} value={item.id}>Delete</Button>
        </>
      ),
    },
  ];


  return (
    <>
    <div className="site-layout-background" style={{ padding: 24 }}>
      <h1 style={{textAlign:"center", fontSize:"30px"}}>Data Movie</h1>
      <div>
        <Button onClick={createNewData} type="primary" style={{ margin: 20, float:"left" }}>
            <PlusOutlined />Add Data Movie
        </Button>
        <Search placeholder="input search text" onSearch={onSearch} enterButton style={{width:"350px", padding: 24, float:"right" }} />
      </div>
      <Table dataSource={movie} columns={columns} scroll={{ x: 1300 }} />
    </div>
    </>
  )
}
export default MovieList