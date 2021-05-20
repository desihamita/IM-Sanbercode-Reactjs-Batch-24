import React, {useState, useContext} from "react"
import {MahasiswaContext} from "./MahasiswaContext"
import axios from "axios"
import '../css/table.css'

const MahasiswaForm = () =>{
  const [Mahasiswa, , , setFetch, currentId, ] = useContext(MahasiswaContext)
  const [inputValue, setInputValue] = useState({
    name : "",
    course : "",
    score : 0
  })

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    if (currentId === null){
      // untuk create data baru
      axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, inputValue)
      .then(res => {
          setFetch(true)
      })
    }else{
        axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, inputValue)
        .then(() => {
            setFetch(true)
        })      
    }
  }

  return(
    <>
      { Mahasiswa !== null &&
        (<div >
            <h1>Form Daftar Harga Buah</h1>
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col-25">
                        Nama 
                        </div>          
                        <div className="col-75">
                        <input type="text" name="name" onChange={handleChange} value={inputValue.name} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        Mata Kuliah
                        </div>          
                        <div className="col-75">
                        <input type="text" name="course" onChange={handleChange} value={inputValue.course} required/>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-25">
                        Nilai
                        </div>    
                        <div className="col-75">
                        <input type="number" name="score" onChange={handleChange} value={inputValue.score} required min="0" max="100" />
                        </div> 
                    </div>
                    <div className="row">   
                        <input type="submit" value="Submit" /> 
                    </div>
                </form>
            </div>         
        </div>)
      }
    </>
  )
}

export default MahasiswaForm