import React, { useEffect } from 'react';
import { Form, Input, Button, message , Spin } from 'antd';
import '../resources/authentication.css';
import {Navigate, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
function Register() {
const [loading, setLoading]=useState(false);

const navigate = useNavigate();
  const onFinish = async(values) => {
    setLoading(true);
  try {
    const user = await axios.post('/api/user/login', values)
    message.success("Login Succeessfull")
    localStorage.setItem('Buildresume-user',JSON.stringify(user.data))
    setLoading(false)
    navigate('/home')
  } catch (error) {
    setLoading(false)
    message.error("Login Fail")
  }
  };
useEffect(()=>{
  if(localStorage.getItem('Buildresume-user'))
    {
      navigate('/home')
    }
})
  return (
    <div className='auth-parent'>
      {loading && <Spin size="large"/>}
      {/* <h1 className='brand'>Build Resume</h1> */}
      <Form layout='vertical' onFinish={onFinish}>
      <h1>Login</h1>
      <hr/>
        <Form.Item name='username' label="username">
          <Input />
        </Form.Item>
        <Form.Item name='password' label="Password">
          <Input type="password" />
        </Form.Item>
        <div className='d-flex align-utem-center justify-content-between'>
          <a href="/register">Click Here To Register</a>
        <Button type='primary' htmlType='submit'>Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
