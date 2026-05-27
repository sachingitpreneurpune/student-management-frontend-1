import React, { useState } from 'react'
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {

    const navigate=useNavigate()
   
    const[student,setStudent]=useState({
        name:"",
        email:"",
        course:""
    })

    function handleChange(event){
        setStudent({
            ...student,[event.target.name]:event.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        try{
           API.post('/students',student)
           alert("Student Added Successfully....")
           navigate('/student')

        }
        catch(error){
            console.log(error)
        }



    }
      



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Student Name:- </label>
            <input type="text" placeholder='Enter Name' id='name' required name='name' value={student.name} onChange={handleChange} /> <br /><br />

            <label htmlFor="email">Enter Student Email:- </label>
            <input type="email" placeholder='Enter Email' id='email' required name='email' value={student.email}   onChange={handleChange} /> <br /><br />

            <label htmlFor="course">Enter Student Course:- </label>
            <input type="text" placeholder='Enter Course' id='course' required  name='course' value={student.course}  onChange={handleChange} /> <br /><br />

            <input type="submit" value='Add Student'/>
        </form>
    </div>
  )
}

export default StudentForm