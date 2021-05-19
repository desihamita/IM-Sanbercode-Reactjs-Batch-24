import React, {useState, useEffect} from "react"
import axios from "axios"
import '../css/table.css'

const Student= () =>{
  const [Student, setStudent] =  useState([])
  const [inputValue, setInputValue] =  useState({
      name : "",
      course : "",
      score : ""
  })
  const [currentId, setCurrentId] =  useState(null)

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
        setStudent(result.data.map(x=>{ 
            return {
                id: x.id, 
                name: x.name,
                mataKuliah: x.course,
                nilai: x.score,
            } 
        }))
    }
      
    fetchData()
  }, [])

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
          let data = res.data
          setStudent([...Student, {
              id: data.id, 
              name: data.name, 
              mataKuliah: data.course, 
              nilai: data.score 
            }])
      })
    }else{
        axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, inputValue)
        .then(() => {
            let newStudent = Student.find(el=> el.id === currentId)
            newStudent.name= inputValue.name
            newStudent.mataKuliah = inputValue.course
            newStudent.nilai = inputValue.score
            setStudent([...Student])
        })      
    }

    setInputValue("")
    setCurrentId(null)
  }

  const handleEdit = (event) =>{
    let ID_STUDENt = event.target.value
    axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${ID_STUDENt}`)
    .then(res => {
      let data = res.data
      setInputValue({
        name: data.name, 
        course: data.course, 
        score: data.score
      })
      setCurrentId(data.id)
    })
  }

  const handleDelete = (event) =>{
    let ID_STUDENt = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${ID_STUDENt}`)
    .then(() => {
      let newStudent = Student.filter(el=> {return el.id !== ID_STUDENt })
      setStudent(newStudent)
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
      { Student !== null &&
        (<div >
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
                    Student.map((item, index)=>{
                        return(                    
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.mataKuliah}</td>
                            <td>{item.nilai}</td>
                            <td>{getNilai(item.nilai)}</td>
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
            {/* Form */}
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

export default Student

