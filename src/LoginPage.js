import React, { useState } from 'react';
import "./LoginPage.css";
import { auth } from './firebase'
import { useHistory } from 'react-router-dom'


const LoginPage = () => {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  let errors = {
    email: '',
    password: ''
  }

  const validate = (email, password, e) => {

    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) &&
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)
    ) {
      console.log('bien escrito el email y password')
      signIn(email, password, e)
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) == false) {
      e.preventDefault()
      errors.email = 'You must write your email correctly'
      errors.display = 'none'
      console.log(errors.email)
    } else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password) == false) {
      e.preventDefault()
      errors.email = 'You must write your password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
      console.log(errors.email)
    }
  }

  const signIn = (email, password, e) => {
    e.preventDefault()
    const promise = auth.signInWithEmailAndPassword(email, password)
    promise.catch(e => console.log(e.message)).then(history.push('/'))
  }

  const createAccount = (email, password, e) => {
    e.preventDefault()
    const promise = auth.createUserWithEmailAndPassword(email, password)
    promise.catch(e => console.log(e.message))
  }


  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
          className='login__logo'
        />
        <div className='login__form'>
          <h2>Sign In</h2>
          <form>
            <label>
              <p >Email:</p>
              <input
                type='text'
                name='email'
                onChange={e => {
                  setEmail(e.target.value)
                }}
                value={email} />
            </label>
            <label>
              <p>Password: </p>
              <input
                type='text'
                name='password'
                onChange={e => setPassword(e.target.value)}
                value={password} />
            </label>
            <button
              className='login__signInButton'
              onClick={e => {
                validate(email, password, e)
              }}
            >
              Sign In
            </button>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button
              type='button'
              className='login__createAccountButton'
              onClick={e => createAccount(email, password, e)}
            >
              Create your Amazon account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
