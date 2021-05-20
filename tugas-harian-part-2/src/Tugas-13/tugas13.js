import React, {useState, useEffect} from "react"
import axios from "axios"
import '../css/table.css'

const Student= () =>{
  const [scores, setScores] = useState([])
  const [fetch, setFetch] = useState(true)
  const [input, setInput] = useState({
    name : "",
    course : "",
    score : 0
  })
  
  useEffect( ( ) => {
    const fetchData = async ( ) => {
      const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)

      setScores(result.data.map(el => {
        const {id, name, course, score} = el
        return {id, name, course, score}
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
    const {name, course, score,  currentId} = input

    if (currentId === null){
      // untuk create data baru
      axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name, course, score, currentId})
      .then((res) => {
          const data = res.data
          //set score with local data
          setScores([...scores, {id: data.id, name, course, score}])
      })
    }else{
        axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score, currentId})
        .then(() => {
            //trigger  fetch data 
            setFetch(true)
        })      
    }
    setInput({
      name: "",
      course: "",
      score: 0,
      currentId: null
    })
  }

  const handleEdit = async (event) => {
    let updateId = parseInt (event.target.value)
    const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${updateId}`)
    const {name, course, score, id:currentId} = result.data
    setInput({name, course, score, currentId})
  }

  const handleDelete = (event) => {
    let deleteId = parseInt (event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${deleteId}`)
    .then(() => {
      let conditionalCurrentId = input.currentId === deleteId ? {currentId : null} : {}
      setInput({...setInput, ...conditionalCurrentId})

      //trigger fetch data in use effect for set scores 
      setFetch(true)
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
      { scores !== null &&
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
                    scores.map((item, index)=>{
                        return(                    
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.course}</td>
                            <td>{item.score}</td>
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
      }
    </>
  )
}

export default Student

