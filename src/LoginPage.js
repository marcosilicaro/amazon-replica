import React, { useState } from 'react';
import "./LoginPage.css";
import { auth } from './firebase'
import { useHistory } from 'react-router-dom'
import { connect } from "react-redux";

import { changeUserEmail } from "./actions/index";


const LoginPage = (props) => {

  const historyy = useHistory()
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
      setisPasswordSyntaxWrong(false)
      setisEmailSyntaxWrong(true)
      document.getElementById("emailSubtext").innerHTML = "Email must be written correctly";
    } else if (isPasswordSyntaxGood === false) {
      e.preventDefault()
      setisEmailSyntaxWrong(false)
      setisPasswordSyntaxWrong(true)
      document.getElementById("passwordSubtext").innerHTML = "Wrong password";
    }
  }

  const signIn = (email, password, e) => {
    e.preventDefault()
    const promise = auth.signInWithEmailAndPassword(email, password)
    promise.then(
      respuesta => {
        historyy.push('/')
        props.changeUserEmail(respuesta.user.email)
      },
      error => {
        if (error.code === 'auth/wrong-password') {
          setisEmailSyntaxWrong(false)
          setisPasswordSyntaxWrong(true)
          document.getElementById("passwordSubtext").innerHTML = "Wrong password";
        } else {
          setisEmailSyntaxWrong(true)
          setisPasswordSyntaxWrong(false)
          document.getElementById("emailSubtext").innerHTML = "Account does not exist";
        }
      }
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
      setisPasswordSyntaxWrong(false)
      setisEmailSyntaxWrong(true)
      document.getElementById("emailSubtext").innerHTML = "Email must be written correctly";
    } else if (isPasswordSyntaxGood == false) {
      e.preventDefault()
      setisEmailSyntaxWrong(false)
      setisPasswordSyntaxWrong(true)
      document.getElementById("passwordSubtext").innerHTML = "You must write your password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
    }

  }

  const beforeLogin = () => {
    return (
      <div className='login'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
          className='login__logo'
        />
        <div className='login__container'>
          <div className='login__form'>
            <h2 className='title'>Sign In</h2>
            <form>
              <label style={{ paddingBottom: "10px" }}>
                <p className='strong'>Email:
                <p id='emailSubtext' className={isEmailSyntaxWrong === false ? 'hidden' : 'red'}>
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
              <label style={{ paddingBottom: "10px" }}>
                <p className='strong'>Password:
                <p id='passwordSubtext' className={isPasswordSyntaxWrong === false ? 'hidden' : 'red'}>

                  </p>
                </p>
                <input
                  type='password'
                  name='password'
                  onChange={e => setPassword(e.target.value)}
                  value={password} />
              </label>
              <button
                style={{ marginBottom: "10px", backgroundColor: 'orange', borderWidth: '1px' }}
                className='login__signInButton'
                onClick={e => {
                  validateAndSignIn(email, password, e)
                }}
              >
                Sign In
            </button>
              <p style={{ marginBottom: "10px" }}>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
              <button
                style={{ marginBottom: "10px", backgroundColor: 'orange', borderWidth: '1px' }}
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

  const afterLogin = () => {
    return (
      <div className='login'>
        <div className='login__container'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
            className='login__logo'
          />
          <div className='login__form'>
            <h2>You're logged in as {props.userEmail}</h2>
          </div>
        </div>
      </div>
    );
  }

  return props.userEmail != '' ? afterLogin() : beforeLogin()
}

const mapStateToProps = (state) => {
  return {
    userEmail: state.userEmail,
  };
};

export default connect(mapStateToProps, {
  changeUserEmail: changeUserEmail,
})(LoginPage);
