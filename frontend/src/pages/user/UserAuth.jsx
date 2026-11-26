import { useState } from 'react'
import image from '../../assets/images.png'

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const formSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, password)
  }

  return (
    <>
      <h1 className="heading">Login Form</h1>
      <img src={image} className="image" alt="Blood donation" />

      <form className="form" onSubmit={formSubmit}>
        NAME: <input type="text" className="name" required placeholder="Enter your Name here" value={name} onChange={(e) => setName(e.target.value)} /><br />
        EMAIL: <input type="email" className="email" required placeholder="Enter your Email here" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        PASSWORD: <input type="password" className="password" required placeholder="Enter your Password here" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit" className="bg-red-600 text-white py-2 ">Submit</button>
      </form>
    </>
  )
}

export default Login