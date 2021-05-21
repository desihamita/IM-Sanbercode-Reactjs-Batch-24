import React, { useState, createContext } from "react"

export const MahasiswaContext = createContext();

export const MahasiswaProvider = props => {
  const [Mahasiswa, setMahasiswa] = useState([])
  const [fetch, setFetch] = useState(true)
  const [currentId, setCurrentId] = useState(null)

  return (
    <MahasiswaContext.Provider value={[Mahasiswa, setMahasiswa, fetch, setFetch, currentId, setCurrentId]}>
      {props.children}
    </MahasiswaContext.Provider>
  );
};