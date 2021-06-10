import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Card, Row, Col, Divider, Input } from 'antd';
import "../../assets/css/style.css"
const { Meta } = Card;
const { Search } = Input;


const MovieHome = () => {
  const [game, setGame] = useState([])
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

  const onSearch = (value, event) => {
    event.preventDefault()
    axios.get(`https://backendexample.sanbersy.com/api/data-game`)
    .then(res => {
      let resGame = res.data.map(el=>{ return {
          id: el.id,
          key: el.id,
          name: el.name, 
          genre: el.genre, 
          singlePlayer: el.singlePlayer, 
          multiplayer: el.multiplayer, 
          platform: el.platform, 
          release: el.release, 
          image_url: el.image_url
        }
      })

      let filteredGame = resGame.filter(x=> x.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
      setGame([...filteredGame])
    })
  }

  return (
    <>
      <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <div className="site-card-wrapper">
        <div>
          <h1 style={{fontSize:"50px", paddingRight:"10px", float:"left"}}>Games </h1>
          <Search placeholder="input search text" onSearch={onSearch} enterButton style={{width:"350px", padding: 24, float:"right" }} />
        </div>
        <Divider />
          <Row gutter={16}>
            {
              game.map((item) => {
                return (
                  <>
                    <Col span={4}>
                      <Card
                        hoverable
                        style={{ width: 170, margin: 10 }}
                        cover={<img alt="example" src={item.image_url} />}
                        className="image-Container"
                      >
                        <Meta title={item.name}  />
                        <Link to={`/game-data/details/${item.id}`}>Detail</Link>
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