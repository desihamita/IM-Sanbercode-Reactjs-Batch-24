import React, {useContext} from "react"
import { Link } from 'react-router-dom'
import { Layout, Menu, Button,} from 'antd';
import {UserContext} from "../../Context/UserContext";


const Header = () => {
    const [user, setUser] = useContext(UserContext)
    const { Header } = Layout;
  
    const handleLogout = ()=>{
      setUser(null)
      localStorage.removeItem("user")
    }
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <Menu  mode="horizontal" style={{ marginLeft: "60%" }}>
                <Menu.Item>
                    <Link to="/">Movies</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/Games">Games</Link>
                </Menu.Item>
                { user ?  
                    <>
                    <Menu.Item>
                        <Button type="primary" shape="round" >
                            <div onClick={handleLogout} type="primary" shape="round" >logout</div>
                        </Button>
                    </Menu.Item>
                    </>
                :
                    <>
                     <Menu.Item >
                        <Button type="primary" shape="round" >
                            <Link to="/login">Sing in</Link>
                        </Button>
                    </Menu.Item>
                    <Menu.Item >
                        <Button type="primary" shape="round" >
                            <Link to="/register">Sing up</Link>
                        </Button>
                    </Menu.Item>
                    </>
                }
            </Menu>
        </Header>
    )
}

export default Header