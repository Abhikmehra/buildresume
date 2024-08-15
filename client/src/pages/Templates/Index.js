import React,{useRef} from 'react'
import {useReactToPrint} from 'react-to-print'
import Templates1 from './Templates1'
import DefaultLayout from '../../components/DefaultLayout'
import { useParams } from 'react-router-dom'
import Templates2 from './Templates2'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
function Templates() {
  const navigate = useNavigate();
  const componentRef=useRef()
  const handlePrint = useReactToPrint({
    content:()=>componentRef.current,
  });
  const params = useParams()
  const gettemplate=()=>{
    switch(params.id){
      case '1':{
        return <Templates1/>;
      }
      case '2':{
        return <Templates2/>; 
      }
    }
  }
  return (
    <DefaultLayout>
      <div className='d-flex justify-content-end my-5 '>
      <Button onClick={()=>navigate('/home')} className='backbtn'>Back</Button>
      <Button className='mx-5 printbtn' onClick={handlePrint}>Print</Button>
      </div>
      <div ref={componentRef}>{gettemplate()}</div>
    </DefaultLayout>
  );
}

export default Templates