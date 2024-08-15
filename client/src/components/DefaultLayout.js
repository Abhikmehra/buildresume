import React from 'react';
import './../resources/DefaultLayout.css';
import Logo  from '../components/BRLogo.png';
import { Button, Dropdown, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import {UserOutlined} from "@ant-design/icons"
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('Buildresume-user'));
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to='/home'>Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/profile'>Profile</Link>
      </Menu.Item>
      <Menu.Item onClick={() => {
        localStorage.removeItem('Buildresume-user');
        navigate('/login');
      }}>
        <Link to=''>Logout</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/contact'>Contact Us</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='layout'>
      <div className='header d-flex'>
        <h1 onClick={()=>navigate('/home')} style={{cursor:'pointer'}}><img style={{height:'3rem'}} src={Logo} alt={"Loading.."}/></h1>
        <Dropdown overlay={menu} placement='bottomLeft'>
          <Button size="middle" icon={<UserOutlined/>}>{user.firstName}</Button>
        </Dropdown>
      </div>
      <div className='content' style={{ overflow: 'scroll' }}>
        {props.children}
      </div>
    </div>
  );
}

export default DefaultLayout;
