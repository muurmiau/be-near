import React from 'react'
import { useState } from 'react'
import cls from './LogIn.module.css'

import {NavLink} from 'react-router-dom'
import { getUsers, sendRegisterData , sendAuthorizeData} from '../../../services/BackApi'

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
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [usernameDirty, setUsernameDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [usernameError, setUsernameError] = useState("Can't be empty")
    const [passwordError, setPasswordError] = useState("Can't be empty")

    const [error, setError] = useState('')

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
            case 'username':
                setUsernameDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const submitButton = () => {

        if ((usernameError) ||
        (passwordError) ||
        (error)){
            return (
                <button className={ `${cls.button} ${cls.main}` } type='submit'>Enter</button>
                )
        } else {
            if (error == '') {
                return (
                <button className={ `${cls.button} ${cls.main}` } type='submit'>Enter</button>
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
        if (!((usernameError) ||
            (passwordError))) {
            
            let response = sendAuthorizeData(e.target.username.value,
                                        e.target.password.value)
            response.then(res => {
                setError(res['error'])
            })

            response.then(res => console.log(res))

            /*if (error != '') {

            }*/


        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p className={ cls.enter_text }>Enter your data</p>

                <div>
                    <input className={ (usernameDirty && usernameError) ? cls.input_incorrect : cls.input_correct } onChange={e => usernameHandler(e)} onBlur={e => blurHandler(e)} name='username' type='text' placeholder='Enter your username...'/>
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