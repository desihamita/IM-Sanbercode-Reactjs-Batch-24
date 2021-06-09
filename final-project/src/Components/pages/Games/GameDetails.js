import React, { useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"
import {Card, Row, Col} from 'antd';
import axios from "axios"

const GameDetails = () => {
    let {id} = useParams()
    const [game, setGame] = useState("")
    const [fetch, setFetch] = useState(true)
    
    useEffect( () => {
      const fetchData = async ( ) => {
        const result = await axios.get(`https://backendexample.sanbersy.com/api/data-game/${id}`)

        const {name, genre, singlePlayer, multiplayer, platform, release, image_url} = result.data

        setGame(result.data)
      }
      if(fetch){
        fetchData()
        setFetch(false)
        }
    },[fetch])

    return (
        <>
        <div className="site-layout-background" style={{ padding: 24}}>
            <div className="site-card-wrapper" style={{paddingLeft: 200}}>
                <Row gutter={16}>
                <Col span={2} key={game.id}>
                    <Card style={{ width: 900 }}>
                        <img alt="example" style={{float:"left", margin:"20px", marginRight: 30}} src={game.image_url} />
                        <div >
                            <p style={{fontSize:"25px", marginTop: 19}}><strong>Judul : </strong> {game.name}</p>

                            <p style={{fontSize:"20px", margin: 0}}><strong>Genre : </strong> {game.genre}</p>

                            <p style={{fontSize:"20px", margin: 0}}><strong>SiglePlayer : </strong> {game.siglePlayer}</p>

                            <p style={{fontSize:"20px", margin: 0}}><strong>MultiPlayer : </strong> {game.multiplayer}</p>

                            <p style={{fontSize:"20px", margin: 0}}><strong>Platform : </strong> {game.platform} / 10</p>

                            <p style={{fontSize:"20px"}}><strong>Release : </strong> {game.release}</p>

                            <p style={{fontSize:"20px"}}><Link to={`/game`}>Kembali</Link></p>
                        </div>
                    </Card>
                </Col>
                </Row>
            </div>
        </div>
        </>
    );
}


export default GameDetails