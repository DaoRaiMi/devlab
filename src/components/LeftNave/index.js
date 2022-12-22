import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import {
    // HomeOutlined,
    DashboardOutlined,
    GitlabOutlined,
    AppstoreOutlined,
    ApartmentOutlined,
    SettingOutlined,
    UserOutlined,
    UsergroupAddOutlined,
    CloudServerOutlined,
    PartitionOutlined,
    SafetyCertificateOutlined
} from '@ant-design/icons'

import './index.less'
import logo from '../../asset/images/k8s_logo.png'
import { Fragment } from 'react'

const items = [
    // { label: "Home", key: "home", icon: <HomeOutlined /> },
    { label: "Dashboard", key: "dashboard", icon: <DashboardOutlined /> },
    { label: "SCM", key: "scm", icon: <GitlabOutlined /> },
    { label: "Projects", key: "projects", icon: <AppstoreOutlined /> },

    { label: "Ingress", key: "ingress", icon: <ApartmentOutlined /> },
    { label: "Pipelines", key: "pipelines", icon: <PartitionOutlined /> },
    {
        label: "Management",
        key: "management",
        icon: <SettingOutlined />,
        children: [
            { label: "Users", key: "users", icon: <UserOutlined /> },
            { label: "Roles", key: "roles", icon: <UsergroupAddOutlined /> },
            { label: "Permissions", key: "permissions", icon: <SafetyCertificateOutlined /> },
            { label: "Clusters", key: "clusters", icon: <CloudServerOutlined /> },
        ]
    }
]

export default function LeftNav() {
    const handleOnClick = (e) => {
        console.log("/"+e.keyPath.reverse().join("/"))
    }
    return (
        <Fragment>
            <Link to="home" className="left-nav">
                <header className='left-nav-header'>
                    <img src={logo} alt="k8s-logo" />
                    <h1>Kubernetes</h1>
                </header>
            </Link>
            <Menu
                defaultSelectedKeys={"dashboard"}
                theme="dark"
                mode="inline"
                items={items}
                // onSelect={handleOnSelect}
                onClick={handleOnClick}
            // onOpenChange={handleOpenChange}
            />
        </Fragment>
    )
}