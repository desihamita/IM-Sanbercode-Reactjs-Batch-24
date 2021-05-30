import React, { useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

const MovieDetails = () => {
    let {id} = useParams()
    const [movie, setMovie] = useState([])
    
    useEffect( ( ) => {
      const fetchData = async ( ) => {
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/books/${id}`)
  
        setMovie(result.data(el => {
            const {id, title, description, year, duration, genre, rating, review, image_url} = el
            return {id, title, description, year, duration, genre, rating, review, image_url}
        }))
      }
    fetchData()
    },[])

    return (
        <div>
            <section>
            <h1>Dafar Buku-Buku Pilihan</h1>
                <div id="articel-list">
 
                </div>
            </section>
        </div>
    );
}


export default MovieDetails