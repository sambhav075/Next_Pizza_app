import {React, useReducer, useState} from 'react'
import Link from 'next/link';
import { stringify } from 'postcss';
import { useRouter } from 'next/router';

const SignUp = () => {
  const  router = useRouter()
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const response = await fetch("api/userSignUp",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:credentials.name,
        email:credentials.email,
        password:credentials.password,
        location:credentials.geolocation,
      })
    });
    const res =await response.json();
    if(res.success)
    {
      localStorage.setItem("token", res.authToken)
      localStorage.setItem("userEmail", credentials.email)
      localStorage.setItem("isAdmin", false)
      router.push("/")
    }
    else {
      alert("There is something wrong please try again")
    }
  }
  const [credentials, setCredentials] =useState({name:"", email:"", password:"", geolocation:""});
  const handleChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div
    style={{
      height: "90vh",
      backgroundImage:
      'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      backgroundSize: "cover",
      backgroundSize: "cover",
    }}
    className="flex justify-center items-center"
  >
    <div className="container w-full max-w-md">
      <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
          <label htmlFor="name"
         
           className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2">
            Name
          </label>
          <input name="name" type="text" value={credentials.name} 
          required
          onChange={handleChange}
           placeholder="Enter your name"
           className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email"
         
           className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2">
            Username
          </label>
          <input name="email" type="email" value={credentials.email} 
          onChange={handleChange}
          required
           placeholder="Enter your email"
           className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password"
           className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2">
            Password
          </label>
          <input name="password" type="password" value={credentials.password} 
          onChange={handleChange}
          required
           placeholder="Enter your password"
           className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"

          />
        </div>
        <div className="mb-4">
          <label htmlFor="geolocation"
           className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2">
            Address
          </label>
          <input name="geolocation" type="text" value={credentials.geolocation} 
          required
          onChange={handleChange}
           placeholder="Enter your address"
           className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"

          />
        </div>
        <div className="flex items-center justify-between">
        <button type="submit" className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 py-2.5 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
          Sign Up
        </button>
        <Link href={"/login"} style={{all:"unset"}}>
        <button  className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 py-2.5 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
          Already user?
        </button></Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignUp
