import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul style={{display:'flex',gap:'20px',padding:'20px',background:'yellow' , justifyContent:"space-evenly"}}>
            <Link to='/' style={{color:'red' , textDecoration:"none"}}>Home</Link>
            <Link to='/add' style={{color:'white' , textDecoration:"none"}}>Add Students</Link>
            <Link to='/student' style={{color:'white' , textDecoration:"none"}}>Student List</Link>
        </ul>
    </div>
  )
}

export default Navbar