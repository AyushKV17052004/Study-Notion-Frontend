import BG from "../assets/Background.png"
import pic1 from "../assets/Pic1.png"
import google from "../assets/Google.png"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login({Logging , currState}){



    const navigate1 = useNavigate();



 function submitHandler(event){
      event.preventDefault();
      Logging(!currState);
      navigate1("/Dashboard")
      toast.success("Successfully Logged In")
  }




    return(
        <div className=" flex flex-row justify-around items-center w-full mt-10 max-[800px]:flex-col-reverse">
            <div className=" w-[500px] max-[950px]:w-11/25 max-[800px]:w-3/5 max-[550px]:w-9/10  flex flex-col justify-center items-start gap-y-5 " >
             
            <h1 className="text-white text-4xl font-bold">Welcome Back</h1>
             <div className="gap-y-2 w-9/10"> 
              <h2 className="text-lg text-gray-600">Build skills for today, tomorrow, and beyond.</h2>
              <h2 className="text-md italic text-blue-400">Education to future-proof your career.</h2></div>

              <form className="w-full" onSubmit={submitHandler}> 
               <div>
               <label className="text-white text-md" htmlFor="Email">Email Address <span className="text-red-600">*</span></label>
               <br></br>
               <input required className="border-b border-gray-500 rounded-md w-full pl-2 py-2 bg-gray-900 text-gray-400 " type="email" placeholder="Enter email address" name="Email" id="Email"></input>
               </div>
                 <br></br>
               <div className="flex flex-col"> 
               <label  className="text-white text-md" htmlFor="Pass">Password <span className="text-red-600">*</span></label>
               
               <input required className="border-b border-gray-500 rounded-md w-full pl-2 py-2 bg-gray-900 text-gray-400 " type="password" placeholder="Enter Password" name="Pass" id="pass"></input>
               <h1 className="text-sm text-blue-500 self-end cursor-pointer">Forgot Password</h1>
               </div>
                <br></br>
                <br></br>


                <div className="flex flex-col gap-y-2">
               <button  type="submit" className="w-full py-2  font-semibold text-center bg-yellow-300 rounded-md text-black cursor-pointer hover:brightness-110">Sign In</button>
               
               <div
               className="w-full flex flex-row justify-center items-center opacity-40">
                <div className="w-1/2 text-gray-400"><hr /></div>
                 <label className="text-sm text-gray-400 "> OR </label>
                <div className="w-1/2 text-gray-400"><hr /></div>
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
                <img className="object-cover w-[400px] z-20 relative right-3 bottom-3 " src={pic1}></img>
                <img className="object-cover w-[400px] z-10 absolute max-[550px]:hidden " src={BG}></img>
             </div>
                         
        </div>
    )
}

export default Login ;