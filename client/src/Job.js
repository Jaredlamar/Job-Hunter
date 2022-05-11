import './Job.css'
import { Card } from 'react-bootstrap'
import React, {useContext, useState} from 'react'
// import { convert } from 'html-to-text'
import {UserContext} from './Context/user'

function Job({jobOpenings, setWatchList}) {

    const [toggleDescription, setToggleDescription] = useState(false)
    const {title, company, category, logo, description, jobtype, salary, url} = jobOpenings
    const user = useContext(UserContext)
  
  const desc = description?.replace(/<[^>]+>/g, '')?.substring(0, 100)
  const wholedesc = description.replace(/<[^>]+>/g, '')

 function handleToggleDescription() {
    setToggleDescription(!toggleDescription)
 }

 function handleWatchlist(){
    setWatchList(jobOpenings)
        fetch(`/applications`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                job_id: jobOpenings.id
                
            })
        })
 }


// const html = description;
// const text = convert(html, {
//   wordwrap: 130
// });
// console.log(text); 

    return (
     <>
                <div>
                    <h2>{title}</h2>
                    <h2>{company}</h2>
                </div>
                <div>
                    <h1>{category}</h1>
                </div>
                <div className='logo-image'>
                    <img src={logo} alt="pic of" />
                </div>
                <p>${salary}</p>
                <p>{jobtype}</p>
                {
                !toggleDescription 
                ? 
            <>
                <p>{desc}...</p>
                <button onClick={handleToggleDescription}>Continue Reading</button>
            </>    
                :
            <>
                <p>{wholedesc}</p>
                <button onClick={handleToggleDescription}>See Less</button>
            </>  
                }
                
                <button onClick={handleWatchlist}>Add to Watch List</button>  
            
       </>
    )
}

export default Job;