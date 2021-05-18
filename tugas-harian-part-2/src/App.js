import logo from './logo.svg';
import React from 'react'
import IntroReactJS from './Tugas-9/tugas9'
import TableBuah from './Tugas-10/tugas10'
import Timer from './Tugas-11/tugas11'
// import ListForm from './Tugas-12/tugas12'
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <IntroReactJS/>
        <TableBuah />
        <Timer start={5} />
        {/* <ListForm /> */}
      </>

    </div>
  );
}

export default App;
