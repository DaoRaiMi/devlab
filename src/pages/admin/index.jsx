import { Navigate } from "react-router-dom"
import { Layout } from "antd"

import memoryUtil from "../../utils/memory"
import LeftNav from "../../components/LeftNave"
import Header from "../../components/Header"

const {Sider, Footer, Content} = Layout
export default function Admin() {
    let user = memoryUtil.user
    if (user == null || user.username === "") {
        return <Navigate to="/login" replace />
    }

    return (
        <Layout style={{height:"100%"}}>
            <Sider>
                <LeftNav/>
            </Sider>
            <Layout>
                <Header/>
                <Content style={{backgroundColor: "white"}}>Content</Content>
                <Footer style={{textAlign:"center",color:"#ccc"}}>Ant Design ©2022 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}