import React, { useEffect, useState } from 'react'
import API from '../services/api'
import { Link } from 'react-router-dom'

const StudentList = () => {

    const[student,setStudent]=useState([])

     async function fetchData(){
        try{
            let res=await API.get("/students")
        console.log(res.data)
        setStudent(res.data)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
             fetchData()
    },[])


    function handleDelete(id){

        API.delete(`/students/${id}`)
        alert("Student Deleted SUccessfully... ");
          fetchData()

    }
    function handlePatch(id){

        API.patch(`/students/${id}`,{course:"Upadted Course"})
        alert("Student Course Updated SUccessfully... ");
          fetchData()

    }


   
  return (

        <>

      
    <div style={{display:"flex" ,flexWrap:"wrap" , justifyContent:"space-evenly"}}>
        {
            student.map((s,index)=>(
                <div key={index} style={{border:"1px solid red" , width:"30%",textAlign:"center"}}>
                    <h1>Name : {s.name}</h1>
                <h1>Email : {s.email}</h1>
                <h1>Course : {s.course}</h1>
               
               <Link to={`/edit/${s.id}`}> <button style={{margin:"5px 5px"}}>Edit</button></Link>


                <Link to={`/single/${s.id}`} ><button style={{margin:"5px 5px"}}>View</button></Link>


                <button style={{margin:"5px 5px"}} onClick={()=>handleDelete(s.id)} >Delete</button>

                <button style={{margin:"5px 5px"}} onClick={()=>handlePatch(s.id)} >Patch</button>


               

                    </div>
            ))
        }
    </div>

  
    </>
  )
}


export default StudentList