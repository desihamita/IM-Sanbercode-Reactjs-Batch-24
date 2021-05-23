import React, {useState} from "react"

import { useHistory} from "react-router-dom"
import '../assets/css/style.css'

const Login = () =>{
    let history = useHistory()
    const [inputValue, setInputValue] = useState({
        userName : "admin",
        password : "admin"
    })
    const [theme, setTheme] = useContext(ThemeContext)

    const changeTheme = ()=>{
      setTheme(theme === "dark" ? "light" : "dark")
    }

    const handleChange = (event) =>{
        let value = event.target.value
        let typeOfInput = event.target.name
        setInputValue({
        ...inputValue
        ,[typeOfInput]: value
        })
    }
       
    const handleSubmit = (event) =>{
        event.preventDefault()
        const {userName, password} = inputValue
        if (userName === "admin" && password === "admin" ){
            history.push("/About")
        }else{
            history.push("./Login")
        }
    }

  return (
    <>
      <div >
        <h1>Login</h1>
          <section>
            <form onSubmit={handleSubmit} >
              <div className="row">
                <div className="col-25">
                  Username
                </div>          
                <div className="col-75">
                  <input type="text" name="name" onChange={handleChange} required/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  Password
                </div>          
                <div className="col-75">
                  <input type="password" name="password" onChange={handleChange}  required/>
                </div> 
              </div>
              <div className="row">   
                  <input type="submit" value="Submit" /> {theme === "dark" ? "light Theme" : "dark Theme"}
              </div>
            </form>
        </section>         
      </div>   
    </>
  )
}

export default Login
