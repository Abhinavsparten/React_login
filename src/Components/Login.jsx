import React, { useState } from 'react';

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
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
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
        <div className="w-full max-w-xl p-10 space-y-9 bg-white rounded-lg shadow-none sm:shadow-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800">Sign In</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 mt-3 border rounded-md bg-[#f6f6f6]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                value={userData.password}
                onChange={handleChange}
                className="w-full px-4 py-4 mt-5 border rounded-md bg-[#f6f6f6]"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-end">
              <a href="/" className="text-black mt-3">
                forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-bold text-white bg-black rounded-md"
            >
              Sign In
            </button>
          </form>

          <p className="hidden sm:block text-md text-center text-black">
            Don't have an account?{' '}
            <a href="/register" className="px-1 text-red-500">
              Sign up
            </a>
          </p>

          <p className="absolute bottom-0 inset-x-0 text-center text-md text-black bg-gray-50 py-4 sm:hidden">
            Don't have an account?{' '}
            <a href="/register" className="px-1 text-red-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
