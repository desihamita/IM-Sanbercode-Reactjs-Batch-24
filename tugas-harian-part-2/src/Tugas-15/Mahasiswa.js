import React from "react"
import {MahasiswaProvider} from "./MahasiswaContext"
import MahasiswaList from "./MahasiswaList"
import MahasiswaForm from "./MahasiswaForm"

const Mahasiswa = () =>{
  return(
    <MahasiswaProvider>
      <MahasiswaList/>
      {/* <MahasiswaForm/>
      <MahasiswaFormEdit/>  */}
    </MahasiswaProvider>
  )
}

export default Mahasiswa