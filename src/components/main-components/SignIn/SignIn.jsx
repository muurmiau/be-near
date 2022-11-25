import React from 'react'
import { useState } from 'react'
import cls from './SignIn.module.css'

import {NavLink} from 'react-router-dom'

const SignIn = (props) => {
    return (
        <main>
            <section className={cls.area}>
                <Form />
            </section>
        </main>
    )
}

const Form = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState("Can't be empty")
    const [passwordError, setPasswordError] = useState("Can't be empty")


    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const emailHandler = (e) => {
        setEmail(e.target.value)
        if (!validateEmail(e)) {
            setEmailError('Incorrect email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Password length 3-8 charachters')
            if (!e.target.value) {
                setPasswordError("Can't be empty")
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div>
            <form>
                <h1>Enter your data</h1>
                {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Enter your email...'/>
                {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} name='password' type='text' placeholder='Enter your password...'/>
                <br></br>
                <NavLink to="/Home">
                    <button type='submit'>Register</button>
                </NavLink>
            </form>
        </div>
    )
}

export default SignIn;