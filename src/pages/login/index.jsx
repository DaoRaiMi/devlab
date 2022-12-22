import { Button, Checkbox, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';

import {reqLogin} from "../../api/user"
import memoryUtil from "../../utils/memory"
import storeUtil from "../../utils/store"
import "./index.less"



export default function Login() {
    const navigate = useNavigate()

    let user = memoryUtil.user
    if (user&& user.username ) {
        return <Navigate to="/" replace/>
    }

    const onFinish = async value =>{
        const {username,password} = value
        let resp = await reqLogin(username,password)
        if (resp.code === 200) {
            message.success("login succeed")
            // 将用户的token保存到内存和localstore中。
            memoryUtil.user = {username:"admin", token:resp.token}
            storeUtil.saveUser({username:"admin", token:resp.token})
            navigate("/")
        }else {
            message.error("login failed")
        }
    }

    return (
        <div className='login-container'>
            <h2>User Login</h2>
            <Form 
                name="login" 
                className='login-form'
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item 
                    name="username" 
                    // 声明式验证，直接使用antd自带的规则进行验证。
                    rules={[
                        {required: true,message:"please input your username"},
                        {min:4,message:"username too short"},
                        {max: 40,message:"username too long"},
                        {pattern: /^[a-z]+\d*\.?[a-z]*\d*/i, message:"invalid username"}
                    ]}
                >
                    <Input prefix={<UserOutlined className='site-form-item-icon'/>} placeholder="Username"/>
                </Form.Item>
                
                {/*Password */}
                <Form.Item 
                    name="password"
                    rules={[
                        // {required:true,message:"please input your password"}
                        // 自定义验证时，第一个参数是rule,这里不使用。返回值是一个promise,
                        {validator: (_,value)=>value?Promise.resolve():Promise.reject("password is required...")}
                    ]}
                >
                    <Input prefix={<LockOutlined className='site-form-item-icon'/>} type="password" placeholder='Password'/>
                </Form.Item>

                <Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                    >
                        <Checkbox>Remember me</Checkbox>
                        
                    </Form.Item>
                    <a className="login-form-forgot" href="/todo">
                        Forgot password
                    </a>
                </Form.Item>
                

                <Form.Item>
                    <Button type='primary' htmlType='submit' className="login-form-button">Login</Button>
                    Or <a href="/todo">register now!</a>
                </Form.Item>
                
            </Form>
        </div>
    )
}