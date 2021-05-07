import React, {Component} from "react" 
import '../css/style.css'



class Table extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      dataHargaBuah: [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ],
    };
  }

  renderTableData() {
    return this.state.dataHargaBuah.map((student, index) => {
      const { nama, harga, berat } = student; //destructuring
      return (
        <tr key={index}>
          <td>{nama}</td>
          <td>{harga}</td>
          <td>{berat} kg</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.dataHargaBuah[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <div className="Container">
          <h1 className="title">Tabel Data Buah</h1>
          <table className="tabel">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;

