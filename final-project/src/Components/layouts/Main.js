import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import {Layout} from "antd"
import "../../assets/css/style.css"

import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Section from "./Section"

const {Content } = Layout

const Main = () => {
    return(
        <Router>
              <Layout>
                <Layout className="site-layout" >
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <Section />
                </Content>
                <Footer />
                </Layout>
            </Layout>
        </Router>
    )
}
export default Main