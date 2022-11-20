import React, {useState} from "react";
import axios from "axios";

import classes from "./Loginform.module.scss"
import { validateEmail, validatePhone } from "../../utils";
import { WisdomCircleIcon } from "../../utils/svg";
import { INVALIDEMAIL, INVALIDPHONE, UNREGISTEREDEMAIL, UNREGISTEREDPHONE, WRONGPASSWORD } from "../../utils/errors";

export const LoginForm = () => {
    const [username, updateUsername] = useState('')
    const [password, updatePassword] = useState('')
    const [errorField, setErrorField] = useState(null)
    const [error, setError] = useState(null)

    const Login = async (e) => {
        e.preventDefault()
        setErrorField(null)
        setError(null)
        let usernameType;
        if (username.includes('.') || username.includes('@')) {
            if (!validateEmail(username)) {
                setErrorField("username")
                setError(INVALIDEMAIL)
                return
            }
            usernameType = "email"
        }
        else {
            if (!validatePhone(username)) {
                setErrorField("username")
                setError(INVALIDPHONE)
                return
            }
            usernameType = "phone"
        }
        const userData = {
            username,
            password
        }
        axios.post("http://localhost:3000/users/login", userData).then((response) => {
            alert(response.data)
        }).catch(({response}) => {
            if (response.data === "incorrect password") {
                setErrorField("password")
                setError(WRONGPASSWORD)
            }
            else if (response.data === "user not found") {
                setErrorField("username")
                if (usernameType === "email") {
                    setError(UNREGISTEREDEMAIL)
                }
                else if (usernameType === "phone") {
                    setError(UNREGISTEREDPHONE)
                }
            }
        })
    }

    return (
        <>
            <div className={classes.container}>
                <WisdomCircleIcon className={classes["top-icon"]}/>
                <div className={classes.title}>Sign In to WisdomCircle</div>
                <div className={classes.subtitle}>Don't have an account? <span>Sign Up</span></div>
                <form onSubmit={Login}>
                    <input className={`${errorField === "username" ? classes.error : ''} ${classes["input-box"]}`} value={username} type="text" placeholder="Email or Mobile Number" onChange={(e) => updateUsername(e.target.value)}/>
                    <div className={classes.error}>{errorField === "username" ? error : ''}</div>
                    <input className={`${errorField === "password" ? classes.error : ''} ${classes["input-box"]}`} value = {password} type="password" placeholder="Password" onChange={(e) => updatePassword(e.target.value)}/> 
                    <div className={classes.error}>{errorField === "password" ? error : ''}</div>
                    <div className={classes["forgot-password"]}>Forgot password</div>
                    <button className={classes.button}>Sign In</button>
                </form>
            </div>
        </>
    )
}