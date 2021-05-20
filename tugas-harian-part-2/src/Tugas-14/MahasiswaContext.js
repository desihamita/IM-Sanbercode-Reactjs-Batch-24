import React, { useState, useEffect, createContext } from "react"
import axios from "axios"

export const MahasiswaContext = createContext();

export const MahasiswaProvider = props => {
  const [Mahasiswa, setMahasiswa] = useState([])
  const [fetch, setFetch] = useState(true)
  const [currentId, setCurrentId] = useState(null)
  
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

  return (
    <MahasiswaContext.Provider value={[Mahasiswa, setMahasiswa, fetch, setFetch, currentId, setCurrentId]}>
      {props.children}
    </MahasiswaContext.Provider>
  );
};