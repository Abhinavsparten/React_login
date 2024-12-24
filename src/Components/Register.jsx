import React, { useState } from 'react';

function Register() {
  const [userData, setUserData] = useState({
    uname:'',
    email: '',
    password: '',
    cpassword:''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  
  return (
    <>
     <div className="flex items-center w-100 justify-center min-h-screen
     bg-gray-50">
      <div className="w-full max-w-xl p-10 space-y-9 bg-white rounded-lg shadow-none sm:shadow-lg">

        <h1 className="text-2xl font-bold text-center text-gray-800">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
         
            <input
              type="text"
              id="uname"
              className="w-full px-4 py-4 mt-3 border rounded-md bg-[#f6f6f6]"
               placeholder="Enter your username"
               value={userData.uname}
               onChange={handleChange}
            />
          </div>
          <div>
       
            <input
              type="email"
              id="email"
              className="w-full px-4 py-4 mt-3 border rounded-md 0 bg-[#f6f6f6]"
              placeholder="Enter your email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div>

            <input
              type="password"
              id="password"
              className="w-full px-4 py-4 mt-3 border rounded-md bg-[#f6f6f6]"
              placeholder="Enter your password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <div>
         
            <input
              type="password"
              id="cpassword"
              className="w-full px-4 py-4 mt-3 border rounded-md bg-[#f6f6f6] mb-3"
              placeholder="Confirm your password"
              value={userData.cpassword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-black rounded-md mt-3 font-bold"
          >
            Sign Up
          </button>
        </form>
        <p className="hidden sm:block text-md text-center text-black">
            Already have an account?{' '}
            <a href="/" className="px-1 text-red-500">
              Sign In
            </a>
          </p>

      
        <p className="absolute bottom-0 inset-x-0 text-center text-md text-black bg-gray-50 py-4 sm:hidden">
        Already have an account?{' '}
          <a href="/" className="px-1 text-red-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
      
    </>
  )
}

export default Register
