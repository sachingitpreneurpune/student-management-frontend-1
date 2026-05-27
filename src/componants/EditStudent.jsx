import React, { useEffect, useState } from 'react'
import API from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'

const EditStudent = () => {

    const {id}=useParams()

    const navigate=useNavigate()

    const[student,setStudent]=useState({
            name:"",
            email:"",
            course:""
        })
    
        async function fetchSingleStudent(){
            
            let res= await API.get(`/students/${id}`)
            setStudent(res.data)
            // console.log(res.data)
        }

        useEffect(()=>{
            fetchSingleStudent()
        },[])


        function handleChange(event){

            setStudent({
                ...student,[event.target.name]:event.target.value
            })
        }


        function handleUpdate(){

            try{
                API.put(`/students/${id}`,student)
                alert("Student  Upadted Successfully...")
                navigate('/student')
            }
            catch(error){
                console.log(error)
            }
        }

  return (
    <div>
        <h1>Edit Student</h1>
        <form onSubmit={handleUpdate} >
            <label htmlFor="name">Enter Student Name:- </label>
            <input type="text" placeholder='Enter Name' id='name' required name='name' value={student.name}  onChange={handleChange} /> <br /><br />

            <label htmlFor="email">Enter Student Email:- </label>
            <input type="email" placeholder='Enter Email' id='email' required name='email' value={student.email}   onChange={handleChange} /> <br /><br />

            <label htmlFor="course">Enter Student Course:- </label>
            <input type="text" placeholder='Enter Course' id='course' required  name='course' value={student.course}   onChange={handleChange} /> <br /><br />

            <input type="submit" value='Update Student'/>
        </form>
    </div>
  )
}

export default EditStudent