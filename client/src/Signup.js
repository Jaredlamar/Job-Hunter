import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Signup({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [loginUserName, setLoginUserName] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [errors, setErrors]= useState([])

    let navigate = useNavigate()
    console.log(errors)

    function handleSignup(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
        .then(res => {

            if(res.ok){
                res.json().then((user)=> onLogin(user)).then(navigate('/main'))
            } else {
                res.json().then((err)=> alert(err.errors))
            }
            })
        }
           
    

    function handleLogin(e) {
        e.preventDefault();
        console.log('clicked')
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                loginUserName,
                loginPassword,
            })
        })
            .then(res => {

                if(res.ok){
                    res.json().then((user)=> onLogin(user)).then(navigate('/main'))
                } else {
                    res.json().then((err)=> alert(err.message))
                }
                })
            }




    return (
        <>
            <form onSubmit={handleSignup}>
                <label>Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <label>Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                ></input>
                <button type="submit">Submit</button>
            </form>

            <form onSubmit={handleLogin}>
                    <label>Username</label>
                    <input
                        type="text"
                        value={loginUserName}
                        onChange={(e) => setLoginUserName(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            {/* <div>
               {errors?.map((err) => (
                   <p>{err}</p>
               ))}
            </div> */}
        </>
    )
}

export default Signup;