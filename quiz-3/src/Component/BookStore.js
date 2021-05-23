import React, { useState, useEffect} from "react"
import axios from "axios"
import "../assets/css/style.css"

const BookStore = () => {
    const [Books,setBooks] = useState([])
    const [fetch, setFetch] = useState(true)
    const [input, setInput] = useState({
      title : "",
      description : "",
      review : "",
      release_year : 0,
      totalPage: 0,
      price: 0,
      image_url: ""
    })
    
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

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setInput({
        ...input,
        [name]: value
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        const {title, description, review, release_year, totalPage, price, image_url, currentId} = input
    
        if (currentId === null){
          // untuk create data baru
          axios.post(`http://backendexample.sanbercloud.com/api/books`, {title, description, review, release_year, totalPage, price, image_url})
          .then((res) => {
              const data = res.data
              //set score with local data
              setBooks([...Books, {id: data.id,title, description, review, release_year, totalPage, price, image_url}])
              
              console.log(setBooks)
          })
        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/books/${currentId}`, {title, description, review, release_year, totalPage, price, image_url, currentId})
            .then(() => {
                //trigger  fetch data 
                setFetch(true)
            })      
        }
        setInput({
            title : "",
            description : "",
            review : "",
            release_year : "",
            totalPage: 0,
            price: 0,
            image_url: null,
            currentId: null
        })
    }

    const handleEdit = async (event) => {
        let updateId = parseInt (event.target.value)
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/books/${updateId}`)
        const {title, description, review, release_year, totalPage, price, image_url, id:currentId} = result.data
        setInput({title, description, review, release_year, totalPage, price, image_url, currentId})
      }
    
    const handleDelete = (event) => {
        let deleteId = parseInt (event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/books/${deleteId}`)
        .then(() => {
          let conditionalCurrentId = input.currentId === deleteId ? {currentId : null} : {}
          setInput({...setInput, ...conditionalCurrentId})
    
          //trigger fetch data in use effect for set Books 
          setFetch(true)
        })
    }

    return(
        <>
      { Books !== null &&
        (<section >
            <div style={{marginBottom:"100px"}}>
                <div style={{width:"50%", textAlign:"right"}}>
                    <input type="text" name="search"  onChange={handleChange} value={input.title} required/>
                </div>
            </div>
            <h1>Daftar Buku</h1>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Review</th>
                    <th>Release Year</th>
                    <th>Total Page</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                    Books.map((item, index)=>{
                        return(                    
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.review}</td>
                            <td>{item.release_year}</td>
                            <td>{item.totalPage}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={handleEdit} value={item.id}>Edit</button>
                                <button onClick={handleDelete} value={item.id}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <br />
            <br />
            {/* Form */}
            <h1>Form Daftar Buku</h1>
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col-25">
                        Title 
                        </div>          
                        <div className="col-75">
                        <input type="text" name="title"  onChange={handleChange} value={input.title} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        Description
                        </div>          
                        <div className="col-75">
                        <textarea name="description" onChange={handleChange} value={input.description} required/>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-25">
                        Review
                        </div>          
                        <div className="col-75">
                        <textarea name="review" onChange={handleChange} value={input.review} required/>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-25">
                        Release Year
                        </div>          
                        <div className="col-75">
                        <input type="number" name="release_year" onChange={handleChange} value={input.release_year} required/>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-25">
                        Total Page 
                        </div>          
                        <div className="col-75">
                        <input type="number" name="totalPage" onChange={handleChange} value={input.totalPage} required/>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-25">
                        Price
                        </div>    
                        <div className="col-75">
                        <input type="number" name="price" onChange={handleChange} value={input.price} required  />
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-25">
                        Image Url
                        </div>    
                        <div className="col-75">
                        <textarea name="image_url" onChange={handleChange} value={input.image_url} required />
                        </div> 
                    </div>
                    <div className="row">   
                        <input type="submit" value="Submit" /> 
                    </div>
                </form>
            </div>         
        </section>)
      }
    </>
    )
}

export default BookStore