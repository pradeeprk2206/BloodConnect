/*import { useState } from "react";
import { registerschema } from "../../components/formSchema/registerschema";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import image from "../../assets/images.png";

function Login() {
  const navigate = useNavigate();
   const{register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(registerschema)})
    function onSubmit2(data){
        console.log(data)
        alert("register Success");
        navigate("/user/UserDashboard", { state: data });

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
          <button type="SUBMIT" className='bg-red-500 '>Submit</button>
           <div className="text-center mt-4"> <p>Don't have an Account</p><Link to="/user/Userregister" className="text-blue-500 hover:underline">Register Here</Link></div>
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
    age:0
    
  })

  function handlechange(e) {

    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(regdata.username===logindata.username && regdata.email===logindata.email && regdata.password===logindata.password && Number(regdata.age)=== Number(logindata.age)){
          event.preventDefault();  
      alert("Login Successful")
        navigate("/user/UserDashboard",{state:logindata})
       }
       else
       {
        console.log("Invalid credentials")
        console.log(logindata)
        console.log(regdata)
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
        EMAIL :<input type="email" className="email" required placeholder="Enter your Email here" name="email"  onChange={handlechange} />
        <br />
        PASSWORD : <input type="password" className="password"  required  placeholder="Enter your Password here"  name="password"   onChange={handlechange}/>
        <br />
        AGE: <input type="number" className="age" required placeholder="Enter your age here" name="age" onChange={handlechange}/>
        <br/>
         <button type="SUBMIT" className='bg-red-500'>Submit</button>
      </form>
      <div className="text-center mt-4"> <p>Don't have an Account</p><Link to="/user/Userregister" className="text-blue-500 hover:underline">Register Here</Link></div>
        </>
  )
}

export default Login;