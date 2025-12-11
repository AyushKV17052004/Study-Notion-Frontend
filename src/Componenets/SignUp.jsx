import { useState } from "react";
import BG from "../assets/Background.png"
import pic2 from "../assets/pic2.png"
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import google from "../assets/Google.png"
import eye from "../assets/eye.png"
import hidden from "../assets/hidden.png"


function SignUp({Logging , currState}){


 const[formData , setFormData] = useState({Pass:"" , confirmPass:""})

 function dataHandler(event){
    setFormData(prev => {
        return{
            ...prev,
            [event.target.name]:event.target.value
        }
    });
 }

 const navigate = useNavigate();
 
  function submitHandler1(event){
     event.preventDefault();
    if(formData.Pass === formData.confirmPass){
     
      Logging(!currState);
      toast.success("Successfully Logged In")
      navigate("/Dashboard")
  }
   else{
  toast.error("Passwords do not match!")
 }
 }

 const[show1 , setShow1] = useState(false)
 const[show2 , setShow2] = useState(false)
function showHandler1(event){
    event.preventDefault()
    setShow1(!show1)
}
function showHandler2(event){
    event.preventDefault()
    setShow2(!show2)
}


  const[active , setActive] = useState(0)
  function clickHandler(){
    if(active==0)
    setActive(1)
   else
    setActive(0)
  }

    return(
        <div  className="flex flex-row justify-around items-center w-full mt-10 max-[800px]:flex-col-reverse">
            <div className="w-[500px] max-[950px]:w-11/25 max-[800px]:w-3/5 max-[550px]:w-9/10  flex flex-col justify-center items-start gap-y-5">
            <h1 className="text-white text-3xl font-bold max-[800px]:text-center">Join the millions learning to code with StudyNotion for free</h1>
            <div>
                <h2 className="text-gray-400 text-lg">Build skills for today, tomorrow, and beyond.</h2>
                <h2 className="text-blue-400 italic text-md">Education to future-proof your career.</h2>
            </div>
            <div className="border-b border-gray-600 bg-gray-900 rounded-3xl justify-center flex flex-row gap-x-1  items-center px-1 py-1">
                <button onClick={clickHandler} className={`text-lg px-4 py-1 text-gray-200 rounded-3xl text-center cursor-pointer ${active===0?"bg-black":"bg-transparent"} `}>Student</button>
                <button onClick={clickHandler} className={`text-lg px-4 py-1 text-gray-200 rounded-3xl text-center cursor-pointer ${active===1?"bg-black":"bg-transparent"}`}>Instructor</button>
            </div>
            
            <form className="w-full" onSubmit={submitHandler1}>
                <div className="flex flex-row justify-center items-center gap-x-3 w-full">
                    <div className="w-1/2">
                        <label className="text-white font-bold mb-1" htmlFor="firstName">First Name<span className="text-red-800">*</span></label>
                        <br></br>
                        <input required className="bg-gray-900 w-full px-2 py-2 text-md text-gray-400 rounded-md border-b border-gray-400" type="text" name="firstName" id="firstName" placeholder="Enter first Name" />
                    </div>
                     <div className="w-1/2">
                        <label className="text-white font-bold mb-1" htmlFor="lastName">Last Name<span className="text-red-800">*</span></label>
                        <br></br>
                        <input required className="bg-gray-900 w-full px-2 py-2 text-md text-gray-400 rounded-md border-b border-gray-400" type="text" name="lastName" id="lastName" placeholder="Enter last Name" />
                    </div>

                </div>
                <br></br>
                   <label className="text-white font-bold mb-1" htmlFor="email">Email Address<span className="text-red-800">*</span></label>
                        <br></br>
                 <input required className="bg-gray-900 w-full px-2 py-2 text-md text-gray-400 rounded-md border-b border-gray-400" type="text" name="email" id="email" placeholder="Enter email address" />
                 <br></br>
                 <br></br>
                  <div className="flex flex-row  justify-center items-center gap-x-3">
                    <div className="w-1/2">
                        <label className="text-white font-bold mb-1" htmlFor="Pass">Create Password<span className="text-red-800">*</span></label>
                        <br></br>
                           <div className="flex flex-row items-center justify-center">
                        <input onChange={dataHandler} required className="bg-gray-900 w-full px-2 py-2 text-md text-gray-400 rounded-md border-b border-gray-400" type={`${show1===true?"text":"password"}`} name="Pass" id="Pass" placeholder="Enter Password" value={formData.Pass} />
                     
                         <img onClick={showHandler1} className="w-5 ml-2 object-cover hover:brightness-110 invert cursor-pointer" src={show1===true?hidden:eye} />   </div>
                    </div>
                     <div className="w-1/2">
                        <label className="text-white font-bold mb-1" htmlFor="confirmPass">Confirm Password<span className="text-red-800">*</span></label>
                        <br></br>
                        <div className="flex flex-row items-center justify-center">
                        <input onChange={dataHandler} required className="bg-gray-900 w-full px-2 py-2 text-md text-gray-400 rounded-md border-b border-gray-400" type={`${show2===true?"text":"password"}`} name="confirmPass" id="confirmPass" placeholder="Confirm Password" value={formData.confirmPass} >
                        </input>
                        <img onClick={showHandler2} className="w-5 ml-2 object-cover hover:brightness-110 invert cursor-pointer" src={show2===true?hidden:eye}  />
                        </div>
                        
                       

                    </div>

                </div>
                <br></br>
                <div className="flex flex-col gap-y-2">
               <button  type="submit" className="w-full py-2 text-lg font-semibold  text-center bg-yellow-300 rounded-md text-black cursor-pointer hover:brightness-110">Create Account</button>
               
               <div
               className="w-full flex flex-row justify-center items-center opacity-40">
                <div className="w-2/4 text-gray-400"><hr /></div>
                 <label className="text-sm text-gray-400 "> OR </label>
                <div className="w-2/4 text-gray-400"><hr /></div>
               </div>
            
              
               <button onClick={e=>e.preventDefault()}  className="w-full py-2  text-center bg-transparent border border-gray-600 cursor-pointer hover:brightness-110  text-white rounded-md ">
                 <div className="flex flex-row justify-center items-center">
                 <img className="w-10" src={google} />
                 <h1 className="text-lg text-white">Sign in with Google</h1>
                 </div>
                 </button>
               </div>

            </form>

            </div>
            <div className=" max-[800px]:w-7/10 flex flex-row justify-center items-center  max-[800px]:mb-5"> 
                            <img className="object-cover w-[400px] z-20 relative right-3 bottom-3 " src={pic2}></img>
                            <img className="object-cover w-[400px] z-10 absolute max-[550px]:hidden " src={BG}></img>
               </div>
        </div>
    )
}

export default SignUp;