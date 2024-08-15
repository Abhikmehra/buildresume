import React, {useState} from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { Button, Form, Tabs, message , Spin } from 'antd';
import Personalinfo from '../components/Personalinfo';
import SkillsEducations from '../components/SkillsEducations';
import ExperienceProject from '../components/ExperienceProject';
import axios from 'axios';

const { TabPane } = Tabs;

function Profile() {
  const [loading, setLoading]=useState(false);
  const user = JSON.parse(localStorage.getItem('Buildresume-user'));

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // console.log('Update Values:', values);  // Log the values to be sent
      const result = await axios.post('/api/user/update', { ...values, _id: user._id });
      // console.log('Response:', response);
      localStorage.setItem("Buildresume-user",JSON.stringify(result.data))
      message.success('Profile Update Successful');
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('Update Failed:', error.response ? error.response.data : error.message); 
      message.error('Update Failed');
    }
  };

  return (
    <DefaultLayout>
      <div className="update-profile">
      {loading && <Spin size="large"/>}
        <h4><b>Update Profile</b></h4>
        <hr/>
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Info" key="1">
              <Personalinfo />
            </TabPane>
            <TabPane tab="Skills And Education" key="2">
              <SkillsEducations />
            </TabPane>
            <TabPane tab="Experience/Project" key="3">
              <ExperienceProject />
            </TabPane>
          </Tabs>
          <Button htmlType="submit">Update</Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
