import React, { useState, useEffect} from "react"
import axios from "axios"
import "../assets/css/style.css"

const BookStore = () => {
  
    const [books, setBooks] =  useState(null)
    const [input, setInput]  =  useState({
      title: "",
      description: "",
      review: "",
      release_year: 2020,
      totalPage: 0,
      price: 0,
      image_url: ""
    })
    const [selectedId, setSelectedId]  =  useState(0)
    const [statusForm, setStatusForm]  =  useState("create")
    const [search, setSearch] = useState("")
  
    useEffect( () => {
      if (books === null){
        axios.get(`https://www.backendexample.sanbersy.com/api/books`)
        .then(res => {
            setBooks(res.data.map(el=>{ return {
              id: el.id, 
              title: el.title, 
              description: el.description,
              review: el.review,
              release_year: el.release_year,
              totalPage: el.totalPage,
              price: el.price,
              image_url: el.image_url
            }
          }))
        })
      }
    }, [books])
    
    const handleChange = (event) =>{
      let typeOfInput = event.target.name
      setInput({...input, [typeOfInput]: event.target.value})
  
    }
  
    const handleSubmit = (event) =>{
      // menahan submit
      event.preventDefault()
  
      let title = input.title
      console.log(input)
  
      if (title.replace(/\s/g,'') !== ""){      
        if (statusForm === "create"){        
          axios.post(`https://www.backendexample.sanbersy.com/api/books`, {
            title: input.title,
            description: input.description,
            review: input.review,
            release_year: parseInt(input.release_year),
            totalPage: parseInt(input.totalPage),
            price: parseInt(input.price),
            image_url: input.image_url
          })
          .then(res => {
              setBooks([...books, {id: res.data.id, ...input}])
          })
        }else if(statusForm === "edit"){
          axios.put(`https://www.backendexample.sanbersy.com/api/books/${selectedId}`, {
            title: input.title,
            description: input.description,
            review: input.review,
            release_year: parseInt(input.release_year),
            totalPage: parseInt(input.totalPage),
            price: parseInt(input.price),
            image_url: input.image_url
          })
          .then(res => {
              let singleBook = books.find(el=> el.id === selectedId)
              singleBook.title = input.title
              singleBook.description = input.description
              singleBook.review = input.review
              singleBook.release_year = input.release_year
              singleBook.totalPage = input.totalPage
              singleBook.price = input.price
              singleBook.image_url = input.image_url
              setBooks([...books])
          })
        }
        
        setStatusForm("create")
        setSelectedId(0)
        setInput({
          title: "",
          description: "",
          review: "",
          release_year: 2020,
          totalPage: 0,
          price: 0,
          image_url: ""
        })
      }
  
    }
  
    const Action = ({itemId}) =>{
      const handleDelete = () => {  
        let newBooks = books.filter(el => el.id !== itemId)
    
        axios.delete(`https://www.backendexample.sanbersy.com/api/books/${itemId}`)
        .then(res => {
          console.log(res)
        })
  
        if (selectedId === itemId){
          setInput({
            ...input,
            title: "",
            description: "",
            review: "",
            release_year: 2020,
            totalPage: 0,
            price: 0,
            image_url: ""
          })
        }
                    
        setBooks([...newBooks])
        
      }
      
      const handleEdit = () =>{
        let singleBook = books.find(x=> x.id === itemId)
        setInput({
          title: singleBook.title,
          description: singleBook.description,
          review: singleBook.review,
          release_year: singleBook.release_year,
          totalPage: singleBook.totalPage,
          price: singleBook.price,
          image_url: singleBook.image_url
        })
        setSelectedId(itemId)
        setStatusForm("edit")
      }
  
      return(
        <>
          <button onClick={handleEdit}>Edit</button>
          &nbsp;
          <button onClick={handleDelete}>Delete</button>
        </>
      )
    }
  
    function truncateString(str, num) {
      if (str === null){
        return ""
      }else{
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
      }
    }
    
  
    const submitSearch = (e) =>{
      e.preventDefault()
      axios.get(`https://www.backendexample.sanbersy.com/api/books`)
      .then(res => {
        let resBooks = res.data.map(el=>{ return {
            id: el.id, 
            title: el.title, 
            description: el.description,
            review: el.review,
            release_year: el.release_year,
            totalPage: el.totalPage,
            price: el.price,
            image_url: el.image_url
          }
        })
  
        let filteredBooks = resBooks.filter(x=> x.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        setBooks([...filteredBooks])
      })
   
    }
  
    const handleChangeSearch = (e)=>{
      setSearch(e.target.value)
    }
  
    return(
        <>
        <section>
             <div>
                <form onSubmit={submitSearch} className="form-search">
                <input type="text" value={search} onChange={handleChangeSearch} />
                <button className="btn-info" >search</button>
                </form>
            </div>
            <br />
            <br />
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
                    books !== null && books.map((item, index) =>{
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
                                <Action itemId={item.id} />
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
        </section>
    </>
    )
}

export default BookStore