import React, {useState, useEffect} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"

const StudentScoresList = ({containerStyle}) =>{
  let history = useHistory()
  const [scores, setScores] = useState([])
  const [fetch, setFetch] = useState(true)
    
  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
      
      setScores(
        result.data.map(el=> {
          const {id, name, course, score} = el
          return {id, name, course, score}
        })
      )
    }
    if(fetch){
      fetchData()
      setFetch(false)
    }

  },[fetch])

  const handleEdit = async (event)=>{
    let editedId = parseInt(event.target.value)
    history.push(`/tugas15/edit/${editedId}`)
  }

  const handleDelete = (event)=>{
    let deletedId = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${deletedId}`).then(
      ()=>{
        // trigger fetch data in use effect for set scores
        setFetch(true)
      }
    )
  }

  const getScoreIndex = (score)=>{
    if (score >= 80) {
      return "A"
    }else if(score >= 70 && score < 80){
      return "B"
    }else if(score >= 60 && score < 70){
      return "C"
    }else if(score >= 50 && score < 60){
      return "D"
    }else{
      return "E"
    }
  }

  const createNewData = ()=>{
    history.push('/tugas15/create')
  }

  return (
    <div style={containerStyle}>
      <h1 style={{textAlign: "center"}}>Daftar Nilai Mahasiswa</h1>
      <br/>
      <button className="btn-info" onClick={createNewData}>Add Nilai Mahasiswa</button>
      <table className="student-scores">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Indeks Nilai</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {
            scores.map((el, index)=>{
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{el.name}</td>
                  <td>{el.course}</td>
                  <td>{el.score}</td>
                  <td>{getScoreIndex(el.score)}</td>
                  <td>
                    <button style={{marginRight: "10px"}} onClick={handleEdit} value={el.id}>Edit</button>
                    <button onClick={handleDelete} value={el.id}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default StudentScoresList
