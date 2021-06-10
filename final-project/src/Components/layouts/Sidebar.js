import React, {useState} from "react"
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
    TeamOutlined,
    UploadOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons'
const { SubMenu } = Menu
const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const toggle = () => {
      setCollapsed(!collapsed)
    }

    return (
        <>
        <Sider trigger={null} collapsible collapsed={collapsed} >
            <div style={{color:"white", textAlign:"right"}} >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })}  
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <SubMenu key="sub1" icon={<VideoCameraOutlined />} title="Movies">
                <Menu.Item key="3"><Link to="/movie-data">Data Movies</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/movie-data/create">Create Movies</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Games">
                <Menu.Item key="6"><Link to="/game-data">Data Games</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/game-data/create">Create Games</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/changePassword">Change Password </Link>
                </Menu.Item>
            </Menu>
        </Sider>
        </>
    )
}

export default Sidebar 