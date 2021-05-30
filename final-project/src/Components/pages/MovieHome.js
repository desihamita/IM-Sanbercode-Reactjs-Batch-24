import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Card, Row, Col } from 'antd';
const { Meta } = Card;


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

  return (
    <>
      <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            {
              movie.map((item, index) => {
                return (
                  <>
                    <Col span={4}>
                      <Card
                        hoverable
                        style={{ width: 170 }}
                        cover={<img alt="example" src={item.image_url} />}
                      >
                        <Meta title={item.title}  />
                        <Link to={`/movie/details/${item.id}`}>Detail</Link>
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