import React, {useState, useContext, useEffect} from "react"
import {MahasiswaContext} from "./MahasiswaContext"
import axios from "axios"
import '../css/table.css'


const MahasiswaList = () =>{
  const [Mahasiswa, setMahasiswa, ,setFetch,, ] = useContext(MahasiswaContext)
  const [, setInputValue] = useState({
    name : "",
    course : "",
    score : 0
  })

  useEffect( ( ) => {
    const fetchData = async ( ) => {
      const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)

      setMahasiswa(result.data.map(el => {
        const {id, name, course, score} = el
        return {id, name, course, score}
      }))
    }
    if(fetch){
      fetchData()
      setFetch(false)
    }
  },[fetch])

  const handleEdit = async (event) => {
    let updateId = parseInt (event.target.value)
    const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${updateId}`)
    const {name, course, score, id:currentId} = result.data
    setInputValue({name, course, score, currentId})
  }

  const handleDelete = (event) => {
    let ID_STUDENt = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${ID_STUDENt}`)
    .then(() => {
      let newMahasiswa = Mahasiswa.filter(el=> {return el.id !== ID_STUDENt })
      setMahasiswa(newMahasiswa)
    })
  }

  const getNilai = (nilai) => {
    if (nilai >= 80 ) { 
      return('A');
    } 
    else if (nilai >= 70 && nilai < 80 ) {
        return("B");
    }  
    else if (nilai >= 60 && nilai < 70) {
        return( "C");
    }  
    else if (nilai >= 50 && nilai < 60) {
        return("D");
    } 
    else {
        return("E");
    }
   }

   return(
    <>
      { Mahasiswa !== null &&
        (
        <div>
            <h1>Daftar Nilai Mahasiswa</h1>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Mata Kuliah</th>
                    <th>Nilai</th>
                    <th>Indeks Nilai</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                    Mahasiswa.map((item, index)=>{
                        return(                    
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.course}</td>
                            <td>{item.score}</td>
                            <td>{getNilai(item.score)}</td>
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
        </div>
        )
      }
    </>
  )
}

export default MahasiswaList