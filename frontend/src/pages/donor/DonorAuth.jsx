/*import { useState } from "react";
import { registerschema } from "../../components/formSchema/registerschema";
import { useNavigate ,useLocation } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import image from "../../assets/images.png";

function Login() {
  const navigate = useNavigate();
  const registerdata=location.state;
  const location=useLocation();
   const{register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(registerschema)})
    function onSubmit2(data){
       if(registerdata.username===logindata.username && registerdata.email===logindata.email && registerdata.password===logindata.password){
        alert("Login Successful")
        navigate("/donor/DonorDashboard",{state:logindata})
       }
       else{
        console.log("Invalid credentials")
       }
      }
  return (
     <>
        <h1 className="heading">Login Form</h1>
        <img src={image} className='image'/>
         <form className="form" onSubmit={handleSubmit(onSubmit2)}>
          USERNAME  : <input type="text" className='name' required placeholder="Enter your UserName here" name='username' {...register("username")}/><br></br>
          <p>{errors.username?.message}</p>
          EMAIL : <input type="email" className='email' required placeholder="Enter your Email here" name='email' {...register("email")}/><br></br>
          <p>{errors.email?.message}</p>
          PASSWORD : <input type="password" className='password' required placeholder="Enter your Password here"  name='password' {...register("password")}/><br></br>
          <p>{errors.password?.message}</p>
          AGE : <input type="number" className='age' required placeholder="Enter your Age here"  {...register("age")}/><br></br>
          <p>{errors.age?.message}</p>
          <button type="SUBMIT" className='bg-red-500'>Submit</button>
           <div className="text-center mt-4"> <p>Don't have an Account</p><Link to="/donor/Donorregister" className="text-blue-500 hover:underline">Register Here</Link></div>
         </form>
        </>
  );
}

export default Login;*/
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from "../../assets/images.png";


function Login() {
  const location=useLocation();
  const regdata=location.state;
  const navigate=useNavigate();
   const [logindata, setLogindata] = useState({
    email: "",
    password: "",
    username: "",
    
  })

  function handlechange(e) {

    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value
    })
  }
  
  function check(){
            console.log(regdata)
        console.log(logindata)
  }
  const handleSubmit = (event) => {
    if(regdata.username===logindata.username && regdata.email===logindata.email && regdata.password===logindata.password ){
      event.preventDefault();
      alert("Login Successful")
        navigate("/donor/DonorDashboard",{state:logindata})
       }
       else
       {
        console.log(regdata)
        console.log(logindata)
        console.log("Invalid credentials")

       }
  }

  return (
    <>
   <h1 className="heading">Login Form</h1>
        <img src={image} className='image'/>
       <form className="form" onSubmit={handleSubmit}  >
        USERNAME :
        <input type="text" className="name" required placeholder="Enter your UserName here" name="username"  onChange={handlechange}/>
        <br />
        EMAIL : <input type="email" className="email" required placeholder="Enter your Email here" name="email"  onChange={handlechange} />
        <br />
        PASSWORD : <input type="password" className="password"  required  placeholder="Enter your Password here"  name="password"    onChange={handlechange}/>
        <br />
    
         <button type="SUBMIT" className='bg-red-500'>Submit</button>
      </form>
      <div className="text-center mt-4"> <p>Don't have an Account</p><Link to="/donor/Donorregister" className="text-blue-500 hover:underline">Register Here</Link></div>
        </>
  )
  }

export default Login;