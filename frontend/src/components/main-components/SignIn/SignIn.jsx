import React from 'react'
import { useState } from 'react'
import cls from './SignIn.module.css'

import {NavLink} from 'react-router-dom'
import { getUsers, sendRegisterData } from '../../../services/BackApi'

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
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [nameDirty, setNameDirty] = useState(false)
    const [surnameDirty, setSurnameDirty] = useState(false)
    const [usernameDirty, setUsernameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [nameError, setNameError] = useState("Can't be empty")
    const [surnameError, setSurnameError] = useState("Can't be empty")
    const [usernameError, setUsernameError] = useState("Can't be empty")
    const [emailError, setEmailError] = useState("Can't be empty")
    const [passwordError, setPasswordError] = useState("Can't be empty")

    const [error, setError] = useState('')


    const validateEmail = (email) => {
        return String(email).length > 0
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

    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 1 || e.target.value.length > 50) {
            setNameError('Too long')
            if (!e.target.value) {
                setNameError("Can't be empty")
            }
        } else {
            setNameError('')
        }
    }

    const surnameHandler = (e) => {
        setSurname(e.target.value)
        if (e.target.value.length < 1 || e.target.value.length > 50) {
            setSurnameError('Incorrect length')
            if (!e.target.value) {
                setSurnameError("Can't be empty")
            }
        } else {
            setSurnameError('')
        }
    }

    const usernameHandler = (e) => {
        setUsername(e.target.value)
        if (e.target.value.length < 1 || e.target.value.length > 50) {
            setUsernameError('Too long')
            if (!e.target.value) {
                setUsernameError("Can't be empty")
            }
        } else {
            setUsernameError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'surname':
                setSurnameDirty(true)
                break
            case 'username':
                setUsernameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const submitButton = () => {

        if ((nameError) ||
        (surnameError) ||
        (usernameError) ||
        (emailError) ||
        (passwordError) ||
        (error)){
            return (
                <button className={ `${cls.button} ${cls.main}` } type='submit'>Register</button>
                )
        } else {
            if (error == '') {
                return (
                <button className={ `${cls.button} ${cls.main}` } type='submit'>Register</button>
                )
            } else {
                return (
                    <NavLink to="/Home">
                        <button className={ `${cls.button} ${cls.main}` } type='submit'>Log In</button>
                    </NavLink>
                    )
            }
        }
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        if (!((nameError) ||
            (surnameError) ||
            (usernameError) ||
            (emailError) ||
            (passwordError))) {
            
            let response = sendRegisterData(e.target.name.value,
                                        e.target.surname.value,
                                        e.target.username.value,
                                        e.target.email.value,
                                        e.target.password.value)
            response.then(res => {
                setError(res['error'])
            })
            response.then(res => console.log(res))
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p className={ cls.enter_text }>Enter your data</p>

                <div>
                    <input className={ (nameDirty && nameError) ? cls.input_incorrect : cls.input_correct } onChange={e =>nameHandler(e)} onBlur={e => blurHandler(e)} name='name' type='text' placeholder='Enter your name...'/>
                </div>

                <div>
                    {/*(surnameDirty && surnameError) && <div style={{color:'red'}}>{surnameError}</div>*/}
                    <input className={ (surnameDirty && surnameError) ? cls.input_incorrect : cls.input_correct } onChange={e => surnameHandler(e)} onBlur={e => blurHandler(e)} name='surname' type='text' placeholder='Enter your surname...'/>
                </div>

                <div>
                    <input className={ (usernameDirty && usernameError) ? cls.input_incorrect : cls.input_correct } onChange={e => usernameHandler(e)} onBlur={e => blurHandler(e)} name='username' type='text' placeholder='Enter your username...'/>
                </div>

                <div>
                    <input  className={ (emailDirty && emailError) ? cls.input_incorrect : cls.input_correct } onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Enter your email...'/>
                </div>
                
                <div>
                    <input className={ (passwordDirty && passwordError) ? cls.input_incorrect : cls.input_correct } onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Enter your password...'/>
                </div>

                <br></br>

                { submitButton ()}
                <br/>
                <br/>
                <span>{error}</span>
                
            </form>
        </div>
    )
}

export default SignIn;