import React, { useState } from 'react';
import "./LoginPage.css";


const LoginPage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
          className='login__logo'
        />
        <div className='login__form'>
          <form>
            <label>Email: <input type='text' onChange={handleChangeEmail} value={email} /></label>
            <label>Password: <input type='text' onChange={handleChangePassword} value={password} /></label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
