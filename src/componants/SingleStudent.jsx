import React, { useEffect, useState } from 'react'
import API from '../services/api'
import { Link, useParams } from 'react-router-dom'

const SingleStudent = () => {

      const {id}=useParams()

      const[student,setStudent]=useState({})

     async function fetchData(){
         try{
        let res=await API.get(`/students/${id}`)
        console.log(res.data)
        setStudent(res.data)

      }catch(error){
        console.log(error)
      }
     }

     useEffect(()=>{
        fetchData()
     },[])
  return (
    <div>
        <h1>Single Students</h1>

                 <Link to='/student'>Show Student List</Link>

    
                  <div style={{border:"1px solid red" , width:"30%",textAlign:"center"}}>
                    <h1>{student.name}</h1>
                <h1>{student.email}</h1>
                <h1>{student.course}</h1>
                  </div>

             


    </div>
  )
}

export default SingleStudent