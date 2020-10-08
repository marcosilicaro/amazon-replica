import React, { useState } from 'react';
import "./LoginPage.css";
import { auth } from './firebase'
import { useHistory } from 'react-router-dom'


const LoginPage = () => {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isEmailSyntaxWrong, setisEmailSyntaxWrong] = useState(false)
  const [isPasswordSyntaxWrong, setisPasswordSyntaxWrong] = useState(false)


  const validateAndSignIn = (email, password, e) => {

    const isEmailSyntaxGood = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const isPasswordSyntaxGood = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)

    if (isEmailSyntaxGood && isPasswordSyntaxGood) {
      signIn(email, password, e)
    } else if (isEmailSyntaxGood === false) {
      e.preventDefault()
      setisEmailSyntaxWrong(true)
    } else if (isPasswordSyntaxGood === false) {
      e.preventDefault()
      setisEmailSyntaxWrong(false)
      setisPasswordSyntaxWrong(true)
    }
  }

  const signIn = (email, password, e) => {
    e.preventDefault()
    const promise = auth.signInWithEmailAndPassword(email, password)
    promise.then(
      respuesta => {
        history.push('/')
      },
      error => console.log(error.message)
    )
  }

  const createAccount = (email, password, e) => {
    e.preventDefault()
    const isEmailSyntaxGood = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const isPasswordSyntaxGood = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)

    if (isEmailSyntaxGood && isPasswordSyntaxGood) {
      const promise = auth.createUserWithEmailAndPassword(email, password)
      promise.catch(e => console.log(e.message))
      signIn(email, password, e)
    } else if (isEmailSyntaxGood == false) {
      e.preventDefault()
      setisEmailSyntaxWrong(true)
    } else if (isPasswordSyntaxGood == false) {
      e.preventDefault()
      setisEmailSyntaxWrong(false)
      setisPasswordSyntaxWrong(true)
    }

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
              <p>Email:
                <p className={isEmailSyntaxWrong === false ? 'hidden' : 'red'}>
                  You must write your email correctly
                </p>
              </p>
              <input
                type='text'
                name='email'
                onChange={e => {
                  setEmail(e.target.value)
                }}
                value={email} />
            </label>


            <label>
              <p>Password:
                <p className={isPasswordSyntaxWrong === false ? 'hidden' : 'red'}>
                  You must write your password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
                </p>
              </p>
              <input
                type='text'
                name='password'
                onChange={e => setPassword(e.target.value)}
                value={password} />
            </label>


            <button
              className='login__signInButton'
              onClick={e => {
                validateAndSignIn(email, password, e)
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
