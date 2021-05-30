import React, { useContext, useState } from "react"
import GambarLogin from "../../assets/img/movie.png"
import { Form, Input, Button, Card, Row, Col} from 'antd';
import { UserContext } from "../../Context/UserContext"
import axios from "axios"

const Register = () => {
  const [, setUser] = useContext(UserContext)
  const [input, setInput] = useState({name: "", email: "" , password: ""})

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post("https://backendexample.sanbersy.com/api/register", {
      name: input.name, 
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
          <img src={GambarLogin} style={{marginLeft:"100px",marginTop:"100px", width:"70%", height:"70%"}} />
      </Col>
      <Col span={12}>
        <Card style={{ width: '70%', margin:"127px", textAlign:"center", Color:"#051b2f"}}>
        <h1 >Register</h1>
          <form >
            <strong style={{display: "inline-block", float:"left", padding:"10px"}}>Name </strong>
            <Input type="text" name="name" onChange={handleChange} value={input.name}/>
            <br/>
            <strong style={{display: "inline-block", float:"left", padding:"10px"}}>Email </strong>
            <Input type="email" name="email" onChange={handleChange} value={input.email}/>
            <br/>
            <strong style={{display: "inline-block", float:"left", padding:"10px"}}>Password </strong>
            <Input type="password" name="password" onChange={handleChange} value={input.password}/>
            <br/>
            <br/>
            <Button onClick={handleSubmit} style={{margin:"10px"}}>Register</Button>
          </form>
        </Card>
      </Col>
    </Row>
  )
}

export default Register