import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './componants/Navbar'
import Home from './pages/Home'
import AddStudent from './pages/AddStudent'
import Students from './pages/Students'
import SingleStudent from './componants/SingleStudent'
import EditStudent from './componants/EditStudent'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>

      <Routes>

         <Route path='/' element={<Home/>}/>
         <Route path='/add' element={<AddStudent/>}/>
         <Route path='/student' element={<Students/>}/>
         <Route path='/single/:id' element={<SingleStudent/>}/>
         <Route path='/edit/:id' element={<EditStudent/>}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
