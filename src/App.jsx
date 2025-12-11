import { useState } from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from "./assets/Logo.png"
import Home from "./Componenets/Home"
import Login from './Componenets/LogIn'
import bars from "./assets/Bars.png"
import SignUp from './Componenets/SignUp'
import Dashboard from './Componenets/Dashboard'
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify'
import { Bounce, Slide, Zoom, Flip } from "react-toastify";



function App() {

const [loggedIn , setLogin] = useState(false);

function Logging(currState){
  setLogin(currState);
}
function logoutHandler(){
  setLogin(!loggedIn)
  toast.success("Logged out Successfully")
}


return(
<div className="w-full min-h-screen bg-[rgb(3,6,18)] flex flex-col">
    <div className='w-4/5  mx-auto flex flex-row justify-between items-center py-5'>
    <div className='w-1/4'><NavLink to="/"><img className='object-cover w-[150px]' src={logo} alt="Logo" ></img></NavLink>
    </div>
      <div className='flex flex-row w-1/4 justify-center gap-x-5 items-center'>
      <h1 className={`text-lg text-gray-300 hover:text-gray-200 max-[800px]:hidden`}><NavLink to="/">Home</NavLink></h1>
       <h1 className={`text-lg text-gray-300 hover:text-gray-200 max-[800px]:hidden`}><NavLink to="/">About</NavLink></h1>
        <h1 className={`text-lg text-gray-300 hover:text-gray-200 max-[800px]:hidden`}><NavLink to="/">Contact</NavLink></h1>
      </div>
     <div className={`w-1/4 flex flex-row justify-center gap-x-3 items-center ${loggedIn===false?"":"hidden"} `}>
       <NavLink to="/LogIn"> <button  className='max-[800px]:hidden py-2 px-4 border border-gray-400 rounded-md text-gray-300 bg-gray-900 hover:border-white cursor-pointer text-nowrap '> Log In</button></NavLink>
       <NavLink  to="/SignUp"> <button  className='max-[800px]:hidden py-2 px-4 border border-gray-400 rounded-md text-gray-300 bg-gray-900 hover:border-white cursor-pointer text-nowrap'>Sign Up</button></NavLink>
     </div>

     <div className={`w-1/4 flex flex-row justify-center gap-x-3 items-center ${loggedIn===true?"":"hidden"} `}>
      <NavLink to="/LogIn"> <button onClick={logoutHandler} className='max-[800px]:hidden py-2 px-4 border border-gray-400 rounded-md text-gray-300 bg-gray-900 hover:border-white cursor-pointer text-nowrap '> Log Out</button></NavLink>
       <NavLink  to="/Dashboard"> <button className='max-[800px]:hidden py-2 px-4 border border-gray-400 rounded-md text-gray-300 bg-gray-900 hover:border-white cursor-pointer text-nowrap'>Dashboard</button></NavLink>
     </div>

     <img className='w-10 self-end min-[800px]:hidden' src={bars} alt="" />

    </div>

    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/LogIn' element={<Login Logging = {Logging} currState={loggedIn}></Login>}></Route>
        <Route path='/SignUp' element={<SignUp Logging = {Logging} currState={loggedIn}></SignUp>}></Route>
        <Route  path="/Dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/Login" />} ></Route>
    </Routes>

     <ToastContainer
        position="top-center"   
        autoClose={2000}
        hideProgressBar={false}
       transition={Zoom}
        closeOnClick
       
      />
  
</div>
)
     
}

export default App
