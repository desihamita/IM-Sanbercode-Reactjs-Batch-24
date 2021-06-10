import {Layout} from "antd"
import React, {useContext} from "react";
import "../../assets/css/style.css";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Section from "./Section"

const {Content } = Layout

const Main = () => {
    const [user] = useContext(UserContext)
    const PrivateRoute = ({...rest}) =>{
      if (user){
        return <Route {...rest}/>
      }else{
        return <Redirect to="/login" />
      }
    }
    return(
        <>
        <Switch>
            <Layout>
                <PrivateRoute> <Sidebar/> </PrivateRoute>
                <Layout className="site-layout" >
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <Section />
                </Content>
                <Footer />
                </Layout>
            </Layout>
        </Switch>
        </>

    )
}
export default Main