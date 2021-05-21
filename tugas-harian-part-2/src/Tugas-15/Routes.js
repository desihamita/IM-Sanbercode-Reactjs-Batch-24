import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {MahasiswaProvider} from "./MahasiswaContext"
import Tugas9 from "../Tugas-9/tugas9"
import Tugas10 from "../Tugas-10/tugas10"
import Tugas11 from "../Tugas-11/tugas11"
import Tugas12 from "../Tugas-12/tugas12"
import Tugas13 from "../Tugas-13/tugas13"
import Tugas14 from "../Tugas-14/Mahasiswa"
import Tugas15 from "../Tugas-15/Mahasiswa"
import Navbar from "../Tugas-15/Navbar"
import MahasiswaForm from "../Tugas-15/MahasiswaForm"
import MahasiswaFormEdit from "../Tugas-15/MahasiswaFormEdit"
import MahasiswaList from "../Tugas-15/MahasiswaList"


const Routes = () => {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Tugas9}></Route>
          <Route exact path="/Tugas-10" component={Tugas10}></Route>
          <Route exact path="/Tugas-11" component={Tugas11}></Route>
          <Route exact path="/Tugas-12" component={Tugas12}></Route>
          <Route exact path="/Tugas-13" component={Tugas13}></Route>
          <Route exact path="/Tugas-14" component={Tugas14}></Route>
          <Route exact path="/Tugas-15" component={Tugas15}></Route>
          <MahasiswaProvider>
            <Route exact path="/Tugas-15/MahasiswaForm">
              <MahasiswaForm />
            </Route>
            <Route exact path="/Tugas-15/MahasiswaFormEdit/:id">
              <MahasiswaFormEdit />
            </Route>
            <Route exact path="/Tugas-15/MahasiswaList">
              <MahasiswaList />
            </Route>
          </MahasiswaProvider>
          

          {/* <Route exact path="/materi-13-2">
            <HooksWithAxios/>
            <br/>
            <Link to="materi-13">back to materi 10</Link>
          </Route>
          <Route exact path="/materi-14">
            <Movie/>
          </Route>
          <Route exact path="/materi-15">
            <PesertaList/>
          </Route>
          <Route exact path="/materi-15/peserta/:id">
            <SinglePeserta/>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default Routes
