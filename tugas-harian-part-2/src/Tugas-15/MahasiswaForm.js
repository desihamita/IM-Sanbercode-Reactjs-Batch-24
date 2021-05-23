import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import { useParams, useHistory, Link} from "react-router-dom"
import '../css/table.css'

const StudentScoresForm = () =>{
  let {id} = useParams()
  let history = useHistory()
  const [fetch, setFetch] = useState(true)
  const [input, setInput] = useState({name: "", course: "", score: 0})
  
  useEffect(()=>{
    const fetchData = async ()=>{
      if (id){
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${id}`)
        const {name, course, score} = result.data
        setInput({name, course, score})
      }
    }
    if (fetch){
      fetchData()
      setFetch(false)
    }

  }, [fetch])

  const handleChange = (event) =>{
    let value = event.target.value
    let typeOfInput = event.target.name
    setInput({
      ...input
      ,[typeOfInput]: value
    })
  }



  const handleSubmit = (event) =>{
    event.preventDefault()

    const {name, course, score} = input
    
    if (id){
      // berarti update data yang sudah ada (dapat dari currentId)
      axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${id}`, {name, course, score}).then(
        ()=>{
          history.push("/tugas15")

        }
      )
    }else{
      // berarti create data baru
      
      axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name, course, score}).then(
        ()=>{
          history.push("/tugas15")
        }
      )
    }

    setInput({name: "", course: "", score: 0})
  }

  return (
    <>
      (<div >
        <h1>Form Daftar Mahasiswa</h1>
          <div className="container">
            <form onSubmit={handleSubmit} >
              <div className="row">
                <div className="col-25">
                  Nama 
                </div>          
                <div className="col-75">
                  <input type="text" name="name" onChange={handleChange} value={input.name} required/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  Mata Kuliah
                </div>          
                <div className="col-75">
                  <input type="text" name="course" onChange={handleChange} value={input.course} required/>
                </div> 
              </div>
              <div className="row">
                <div className="col-25">
                  Nilai
                </div>    
                <div className="col-75">
                  <input type="number" name="score" onChange={handleChange} value={input.score} required min="0" max="100" />
                </div> 
              </div>
              <div className="row">   
                  <input type="submit" value="Submit" /> 
              </div>
            </form>
        </div>         
      </div>)    
    </>
  )
}

export default StudentScoresForm
