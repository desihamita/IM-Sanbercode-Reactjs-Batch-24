import React, { useState, useEffect} from "react"

import axios from "axios"
import "../assets/css/style.css"

const Home = () => {

    const [Books, setBooks] = useState([])
    const [fetch, setFetch] = useState(true)
    
    useEffect( ( ) => {
      const fetchData = async ( ) => {
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/books`)
  
        setBooks(result.data.map(el => {
          const {id, title, description, review, release_year, totalPage, price, image_url} = el
          return {id, title, description, review, release_year, totalPage, price, image_url}
        }))
      }
      if(fetch){
        fetchData()
        setFetch(false)
      }
    },[fetch])


    return (
        <div>
            <section>
            <h1>Dafar Buku-Buku Pilihan</h1>
                <div id="articel-list">
                    {
                        Books.map((item, index)=>{
                            return(                    
                                <>
                                   <div style={{width:"100%"}}>
                                        <h2>judul : {item.title}</h2><br/>
                                        <img className="image" src={item.image_url}  />
                                        <div style={{float:"right", marginRight:"200px"}}>
                                            <h4 >Tahun Terbit : {item.release_year}</h4>
                                            <h4 >Harga : {item.price}</h4>
                                            <h4 >Jumlah Halaman : {item.totalPage}</h4>
                                        </div>
                                        <p style={{fontSize:"20px"}}>Description : {item.description}</p>
                                        <br/>
                                        <br/>
                                        <hr style={{width:"100%"}} />
                                        <br/>
                                        <br/>
                                   </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
}


export default Home