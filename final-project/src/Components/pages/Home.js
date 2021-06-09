import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Card, Row, Col, Carousel, Divider } from 'antd';
import "../../assets/css/style.css"
import { DoubleRightOutlined } from '@ant-design/icons'
const { Meta } = Card;


const MovieHome = () => {
    const [game, setGame] = useState([])
    const [movie, setMovie] = useState([])
    const [fetch, setFetch] = useState(true)
    
    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await axios.get(`https://backendexample.sanbersy.com/api/data-game`)
            setGame(
                result.data.map(el=> {
                return {
                    id: el.id,
                    key: el.id,
                    name: el.name, 
                    genre: el.genre, 
                    singlePlayer: el.singlePlayer, 
                    multiplayer: el.multiplayer, 
                    platform: el.platform, 
                    release: el.release, 
                    image_url: el.image_url
                }})
            )
        }
        if(fetch){
        fetchData()
        setFetch(false)
        }
    },[fetch])

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

    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <>
        <div className="site-layout-background" style={{ padding: 24 }}>
            <div className="site-card-wrapper">
            <Carousel autoplay>
                <div>
                <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            <Divider orientation="left" style={{fontSize:"30px"}}> New Games</Divider>
            <Row gutter={16} >
                {
                    game.slice(0,5).map((item) => {
                        return (
                        <>
                            <Col span={4} key={item.id}>
                            <Card
                                hoverable
                                style={{ width: 170, margin:"10px" }}
                                cover={<img alt="example" src={item.image_url} />}
                                className="image-Container"
                            >
                                <Meta title={item.name}  />
                                <Link to={`/movie/details/${item.id}`}>Detail</Link>
                            </Card>
                            </Col>
                        </>
                        )
                    })
                }
                <Link to="/game"><DoubleRightOutlined style={{width: 170, fontSize:"50px", paddingTop:"120px"}}/></Link>
            </Row>
            <Divider orientation="left" style={{fontSize:"30px"}}> New Movies</Divider>
            <Row gutter={16}>
                {
                movie.slice(0, 5).map((item) => {
                    return (
                    <>
                        <Col span={4} key={item.id}>
                        <Card
                            hoverable
                            style={{ width: 170, margin:"10px"}}
                            cover={<img alt="example" src={item.image_url} />}
                            className="image-Container"
                        >
                            <Meta title={item.title}  />
                            <Link to={`/movie/details/${item.id}`}>Detail</Link>
                        </Card>
                        </Col>
                    </>
                    )
                })
                }
                <Link to="/movie"><DoubleRightOutlined style={{width: 170, fontSize:"50px", paddingTop:"120px"}}/></Link>
            </Row>
            </div>
        </div>
    </>
  )
}

export default MovieHome 