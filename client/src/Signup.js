import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap'
import './Signup.css';

function Signup({onLogin, currentUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    // const [loginUserName, setLoginUserName] = useState("")
    // const [loginPassword, setLoginPassword] = useState("")
    const [errors, setErrors]= useState([])
    const [toggle, setToggle] = useState(false)

    let navigate = useNavigate()
    console.log(errors)

    function handleToggle(){
        setToggle(!toggle)
    }

    function handleSignup(e) {
        e.preventDefault();
        const user = {
            username,
            password,
            password_confirmation: passwordConfirmation
        }
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
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
        const user = {
            username: username,
            password
        }
        console.log('clicked')
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(res => {

                if(res.ok){
                    res.json().then((user)=> onLogin(user)).then(navigate('/main'))
                } else {
                    res.json().then((err)=> alert(err.error))
                }
                })
            }




    return (
        <>
        
        {
        !toggle 
        ? 
        (
        <div className='log-in-details'>
            <form onSubmit={handleSignup}>
                <div className='form-inner'>
                <h3>Sign Up</h3>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='form-group'>
                        <label>Confirm Password</label>
                        <input type="password" id="confirm-password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div>
                    <Button onClick={handleToggle}>Already have an account</Button>
            </div>
        </div>
        )

        :
       <>
        <form onSubmit={handleLogin}>
            <div className='log-in-details'>
        <div className='form-inner'>
        <h3>Log In</h3>
            <div className='form-group'>
                    <label>Username</label>
                    </div>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <div className='form-group'>
                    <label>Password</label>
                    </div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            
            <button type="submit">Login</button>
        </div>
        <Button className='bttn' onClick={handleToggle} type="submit">Sign Up</Button>
        </div>
    </form>   
    <div>
    </div>
         </>

        }
        
            <div>
               {errors?.map((err) => (
                   <p>{err}</p>
               ))}
            </div>
        </>
    )
}

export default Signup;