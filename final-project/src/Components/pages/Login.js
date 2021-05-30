import React, {useState, useContext} from "react"
import GambarLogin from "../../assets/img/movie.png"
import {Input, Button, Card, Row, Col } from 'antd';
import {UserContext} from "../../Context/UserContext"
import { Link } from "react-router-dom";
import axios from "axios"

const Login = () => {
  const [, setUser] = useContext(UserContext)
  const [input, setInput] = useState({email: "" , password: ""})

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post("https://backendexample.sanbersy.com/api/user-login", {
      email: input.email, 
      password: input.password
    }).then(
      (res)=>{
        var user = res.data.user
        var token = res.data.token
        var currentUser = {name: user.name, email: user.email, token }
        setUser(currentUser)
        localStorage.setItem("user", JSON.stringify(currentUser))
      }
    ).catch((err)=>{
      alert(JSON.stringify(err.response.data))
    })
  }

  const handleChange = (event) =>{
    let value = event.target.value
    let name = event.target.name
    setInput({...input, [name]: value})
  }
  return (
    <Row>
      <Col span={12} style={{backgroundColor:"#051b2f"}}>
          <img src={GambarLogin} style={{marginLeft:"100px",marginTop:"100px",marginBottom:"100px", width:"70%", height:"70%"}} />
      </Col>
      <Col span={12}>
        <Card style={{ width: '60%', margin:"135px", textAlign:"center", padding:"20px"}}>
          <h1>Login</h1>
          <form>
            <label style={{float:"left", padding:"10px"}}>Email </label>
            <Input type="email" name="email" onChange={handleChange} value={input.email}/>
            <br/>
            <label style={{float:"left", padding:"10px"}}>Password </label>
            <Input type="password" name="password" onChange={handleChange} value={input.password}/>
            <br/>
            <br/>
            <Button onClick={handleSubmit} style={{margin:"10px"}}>Login</Button>
            <Button ><Link to="/register">Register</Link></Button>
          </form>
        </Card>
      </Col>
    </Row>
  )
}

export default Login