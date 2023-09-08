import React from 'react'

const Login = () => {
  return (
    <>
      <h2>Sign In</h2>
      <p>
        <label>Username/Email/Phonenumber</label>
        <input type="text" name="userName" />
      </p>
      <p>
        <label>Password</label>
        <input type="password" name="passWord" />
      </p>
      <button onClick={() => alert("Verifying")}>Login</button>
    </>
  )
}

export default Login
