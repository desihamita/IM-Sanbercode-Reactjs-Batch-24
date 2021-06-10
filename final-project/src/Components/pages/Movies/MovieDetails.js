import React, { useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"
import {Card, Row, Col} from 'antd';
import axios from "axios"
const { Meta } = Card;

const MovieDetails = () => {
    let {id} = useParams()
    const [movie, setMovie] = useState("")
    const [fetch, setFetch] = useState(true)
    
    useEffect( () => {
      const fetchData = async ( ) => {
        const result = await axios.get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)

        const {title, description, year, duration, genre, rating, review, image_url} = result.data

        setMovie(result.data)
      }
      if(fetch){
        fetchData()
        setFetch(false)
        }
    },[fetch])

    return (
        <>
        <div className="site-layout-background" style={{ padding: 24}}>
            <div className="site-card-wrapper" style={{ marginLeft: 80}}>
                <Row gutter={16}>
                <Col span={2} key={movie.id}>
                    <Card style={{ width: 900 }}>
                        <img alt="example" style={{float:"left", margin:"20px", marginRight: 30, width:300, height:400}} src={movie.image_url} />
                        <div >
                            <p style={{fontSize:"25px", marginTop: 19}}><strong>Judul : </strong> {movie.title}</p>

                            <p style={{fontSize:"20px", margin: 0}}><strong>Genre : </strong> {movie.genre}</p>

                            <p style={{fontSize:"20px", margin: 0}}><strong>Year : </strong> {movie.year}</p>

                            <p style={{fontSize:"20px", margin: 0}}><strong>Duration : </strong> {movie.duration} Minutes</p>

                            <p style={{fontSize:"20px", margin: 0}}><strong>Rating : </strong> {movie.rating} / 10</p>

                            <p style={{fontSize:"20px"}}><strong>Review : </strong> {movie.review}</p>

                            <p ><strong style={{fontSize:"20px"}}>Description :</strong><br />{movie.description}</p>

                            <p style={{fontSize:"20px", float: "right"}}><Link to={`/movie`}>Kembali</Link></p>
                        </div>
                    </Card>
                </Col>
                </Row>
            </div>
        </div>
        </>
    );
}


export default MovieDetails