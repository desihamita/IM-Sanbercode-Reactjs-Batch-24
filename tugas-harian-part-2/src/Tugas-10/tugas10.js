import React, {Component} from "react" 
import ItemBuah from "./ItemBuah"

class tableBuah extends Component {
    render (){
      let dataHargaBuah = [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ]
    
    return (
      <>
        <div className="Container" style={{padding:"20px"}}>
          <h1 style={{textAlign : "center"}}>Daftar Harga Buah </h1>
          <table style={{border:"1px solid", width:"40%", margin:"0 auto"}}>
            <thead style={{background:"grey"}}>
              <tr>
                <td>Nama</td>
                <td>Harga</td>
                <td>Berat</td>
              </tr>
            </thead>
            <tbody style={{background:"coral"}}>
              {dataHargaBuah.map((el, index) => {
                return (
                  <>
                    <ItemBuah item={el} key={index} />
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default tableBuah