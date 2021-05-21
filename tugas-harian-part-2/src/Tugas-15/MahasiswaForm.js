import React, {useState, useEffect, useContext} from "react"
import { Link, useHistory } from "react-router-dom";
import {MahasiswaContext} from "./MahasiswaContext"
import axios from "axios"
import '../css/table.css'

const MahasiswaFormEdit = () =>{
  let history = useHistory();
  const [Mahasiswa, setMahasiswa, , setFetch, currentId, ] = useContext(MahasiswaContext)
  const [inputValue, setInputValue] = useState({
    name : "",
    course : "",
    score : 0
  })

  useEffect( ( ) => {
    const fetchData = async ( ) => {
      const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`)
      const {name, course, score} = result.data
      setInputValue({name, course, score})
    }
    fetchData()
  },[currentId])

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
    const {name, course, score} = inputValue

    if (currentId === null){
      // untuk create data baru
      axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name, course, score})
      .then((res) => {
          const data = res.data
          //set score with local data
          setMahasiswa([...Mahasiswa, {id: data.id, name, course, score}])
          history.push(`/Tugas-15/MahasiswaList`)
      })
    }else{
        axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score})
        .then(() => {
            //trigger  fetch data 
            setFetch(true)
            history.push(`/Tugas-15/MahasiswaList`)
        })      
    }
    setInputValue({
      name: "",
      course: "",
      score: 0,
      currentId: null
    })
  }

  return(
    <>
      { 
        (<div >
            <h1>Form Daftar Mahasiswa</h1>
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
                        <Link className="btn-danger" to="/Tugas-15">Cancel</Link>  
                        <input  type="submit" value="Submit" /> 
                    </div>
                </form>
            </div>         
        </div>)
      }
    </>
  )
}

export default MahasiswaFormEdit