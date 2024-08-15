import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import Templateimg from '../pages/Templates/template1.png';
import '../resources/templates.css';
import { Button } from 'antd/es/radio';
import { useNavigate } from 'react-router-dom';
import Templateimg2  from './Templates/template2.png';
function Home() {
  const navigate=useNavigate()
  const templates = [
    {
      title: 'Simple Section',
      image: Templateimg,
    },{
      title:'Highlighted Section',
      image: Templateimg2,
    }
  ];

  return (
    <DefaultLayout>
      <div className='row home'>
        {templates.map((template , index) => (
          <div className='col-md-4' key={template.title}>
            <div className='template'>
              <img src={template.image} height="400"  alt='Img' />
              <div className='text'>
                <p style={{fontSize:'20px'}}>{template.title}</p>
                <Button onClick={()=>navigate(`/templates/${index+1}`)}>Try</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}

export default Home;
