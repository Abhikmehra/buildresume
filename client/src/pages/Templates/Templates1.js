import React from 'react'
import '../../resources/templates.css'
function Templates1() {
    const user = JSON.parse(localStorage.getItem('Buildresume-user'))
  return (
  <>
  <div className='templates1-parent'>
    <div className='top d-flex justify-content-between'>
        <h1> {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
        <div>
            <p>{user.dateOfBirth}</p>
            <p>{user.email}</p>
            <p>{user.mobileNumber}</p>
            <p>{user.address}</p>
        </div>
    </div>
    <div className='divider mt-2'></div>
    <div className='objective mt-3'>
        <h3>Objective</h3>
        <hr/>
        <p>{user.carrierObjective}</p>
    </div>
    <div className='divider mt-2'></div>
    <div className='education mt-3'>
        <h3>Education</h3>
        <hr/>
        {user.education.map((education)=>{
            return <div className='d-flex'>
                <p><b>{education.range} : </b></p>
                <p>&nbsp;&nbsp;<b>{education.qualification} </b>with <b>{education.percentage}% </b> in {education.institution}</p>
                </div>
        })}
    </div>
    <div className='divider mt-2'></div>
    <div className='experience mt-3'>
        <h3>Experience</h3>
        <hr/>
        {user.experience.map((experience)=>{
            return <div className='d-flex'>
                <p><b>{experience.range} : </b></p>
                <p>&nbsp;&nbsp;<b>{experience.company} </b>In  <b>{experience.place}</b></p>
                </div>
        })}
    </div>
    <div className='divider mt-2'></div>
    <div className='project mt-3'>
        <h3>Projects</h3>
        <hr/>
        {user.project.map((project)=>{
            return <div className='d-flex flex-column'>
                <h6 >
                    <b>
                        {project.title} [{project.range}] {""}
                    </b>
                </h6>           
                        <p>{project.description}</p>
     </div>})}
    </div>
    <div className='divider mt-2'></div>
    <div className='skills mt-3'>
        <h3>Skills</h3>
        <hr/>
        {user.skills.map((skills)=>{
            return <div className='d-flex'>
              <p>{skills.technology}</p>
     </div>})}
    </div>
  </div>
  </>
  )
}

export default Templates1