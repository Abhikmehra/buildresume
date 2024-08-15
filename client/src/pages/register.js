import React, { useState , useEffect } from 'react';
import { Form, Input, Button, message , Spin } from 'antd';
import axios from 'axios'
import '../resources/authentication.css'
import { useNavigate } from 'react-router-dom';
function Register() {
const [loading, setLoading]=useState(false);
const navigate = useNavigate()
  const onFinish = async(values) => {
    setLoading(true);
  try {
    await axios.post('/api/user/register', values);
    setLoading(false);
    message.success("Registration Succeessfull")
  } catch (error) {
    setLoading(false);
    message.error("Registration Fail")
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
      {loading && (<Spin size="large"/>)}
      <Form layout='vertical' onFinish={onFinish}>
      <h1>SignUp</h1>
      <hr/>
        <Form.Item name='username' label="Username">
          <Input />
        </Form.Item>
        <Form.Item name='password' label="Password">
          <Input type="password" />
        </Form.Item>
        <Form.Item name='cpassword' label="Confirm Password">
          <Input type="password" />
        </Form.Item>
        <div className='d-flex align-utem-center justify-content-between'>
          <a href="/login">Click Here To Login</a>
        <Button type='primary' htmlType='submit'>Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
