import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Card, Row, Col, Divider, Input } from 'antd';
import "../../assets/css/style.css"
const { Meta } = Card;
const { Search } = Input;


const MovieHome = () => {
  const [movie, setMovie] = useState([])
  const [fetch, setFetch] = useState(true)
    
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

  return (
    <>
      <div className="site-layout-background" style={{ padding: 24 }}>
        <div className="site-card-wrapper">
        <div>
          <h1 style={{fontSize:"50px", paddingRight:"10px", float:"left"}}>Movies </h1>
          <Search placeholder="input search text" onSearch={onSearch} enterButton style={{width:"350px", padding: 24, float:"right" }} />
        </div>
        <Divider />
          <Row gutter={16}>
            {
              movie.map((item) => {
                return (
                  <>
                    <Col span={4}>
                      <Card
                        hoverable
                        style={{ width: 170 , margin:"10px"}}
                        cover={<img alt="example" src={item.image_url} />}
                        className="image-Container"
                      >
                        <Meta title={item.title}  />
                        <Link to={`/movie-data/details/${item.id}`}>Detail</Link>
                      </Card>
                    </Col>
                  </>
                )
              })
            }
          </Row>
        </div>
      </div>
    </>
  )
}

export default MovieHome 