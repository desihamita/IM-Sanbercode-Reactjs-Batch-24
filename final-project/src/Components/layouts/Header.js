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
            <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['4']} >
                { user ?  
                    <>
                    <Menu.Item style={{float:"right"}}>
                        <Button type="primary" shape="round" >
                            <div onClick={handleLogout} type="primary" shape="round" >logout</div>
                        </Button>
                    </Menu.Item>
                    </>
                :
                    <>
                     <Menu.Item style={{float:"right"}}>
                        <Button type="primary" shape="round" >
                            <Link to="/login">Sing in</Link>
                        </Button>
                    </Menu.Item>
                    <Menu.Item style={{float:"right"}}>
                        <Button type="primary" shape="round" >
                            <Link to="/register">Sing up</Link>
                        </Button>
                    </Menu.Item>
                    </>
                }
                <Menu.Item style={{float:"right"}}>
                    <Link to="/game">Games</Link>
                </Menu.Item>
                <Menu.Item style={{float:"right"}}>
                    <Link to="/movie">Movies</Link>
                </Menu.Item>
                <Menu.Item style={{float:"right"}}>
                    <Link to="/">Home</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default Header