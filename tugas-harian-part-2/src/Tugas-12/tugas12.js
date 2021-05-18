import React, {Component} from "react"
import '../css/table.css'

export default class Lists extends Component{
  constructor(props){
    super(props)
    this.state ={
     daftarBuah : [ 
         {nama: "Nanas", hargaTotal:100000, beratTotal:4000},
         {nama: "Manggis", hargaTotal:350000, beratTotal:10000},
         {nama: "Nangka", hargaTotal:90000, beratTotal:2000},
         {nama: "Durian", hargaTotal:400000, beratTotal:5000},
         {nama: "Strawberry", hargaTotal:120000, beratTotal:6000}
      ], 
      inputName: "" ,
      inputHarga: "" ,
      inputBerat: 0,
      currentIndex: -1
      
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      ...this.state.daftarBuah,
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let currentIndex = this.state.currentIndex
    let daftarBuah = this.state.daftarBuah
    let newBuah = {
      nama : this.state.inputName,
      hargaTotal : this.state.inputHarga,
      beratTotal : this.state.inputBerat
    }
    if (currentIndex === -1 ){
      // untuk create
      this.setState({
        daftarBuah: [...daftarBuah, newBuah],
        inputName: "" ,
        inputHarga: "" ,
        inputBerat: 0
      })
    }else{
      //untuk edit karena currentIndex bukan -1
      daftarBuah[currentIndex] = newBuah;
      this.setState({
        daftarBuah,
        inputName: "" ,
        inputHarga: "" ,
        inputBerat: 0,
        currentIndex: -1
      })
    }
  }

  handleEdit = (event) => {
    let index = event.target.value
    let daftarBuah = this.state.daftarBuah[index]
    this.setState({
      inputName: daftarBuah.nama,
      inputHarga: daftarBuah.hargaTotal,
      inputBerat: daftarBuah.beratTotal,
      currentIndex: index
    })

  }

  handleDelete = (event) =>{
    let index = parseInt(event.target.value)
    let newBuah = this.state.daftarBuah.filter((val, idx) => {
      return idx !== index 
    })
    if (this.state.currentIndex === index){
      this.setState({daftarBuah: newBuah, currentIndex: -1})
    }else{
      this.setState({daftarBuah: newBuah})
    }
  }

  render(){
    return(
      <>
        <h1>Daftar Harga Buah</h1>
        <table style={{textAlign:"center"}}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga Total</th>
              <th>Berat Total</th>
              <th>Harga per kg</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.daftarBuah.map((val, index)=>{
                  return(                    
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{val.nama}</td>
                      <td>{val.hargaTotal}</td>
                      <td>{val.beratTotal/1000} kg</td>
                      <td>{val.hargaTotal/(val.beratTotal/1000)}</td>
                      <td>
                        <button onClick={this.handleEdit} value={index} >Edit</button>
                        <button onClick={this.handleDelete} value={index}>Delete</button>
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
        <form onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="col-25">
              Nama 
            </div>          
            <div className="col-75">
              <input type="text" name="inputName" onChange={this.handleChange} value={this.state.inputName} required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              Harga Total
            </div>          
            <div className="col-75">
            <input type="number" name="inputHarga" onChange={this.handleChange} value={this.state.inputHarga} required/>
            </div> 
          </div>
          <div className="row">
            <div className="col-25">
              Berat Total (per gram)
            </div>    
            <div className="col-75">
              <input type="number" name="inputBerat" onChange={this.handleChange} value={this.state.inputBerat} required max="2000" />
            </div> 
          </div>
          <div className="row">   
            <input type="submit" value="Submit" /> 
          </div>
        </form>
      </div>
      </>
    )
  }
}

