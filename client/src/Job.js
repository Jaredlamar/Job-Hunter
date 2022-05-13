import './Job.css'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import React, {useContext, useState} from 'react'
// import { convert } from 'html-to-text'
import {UserContext} from './Context/user'

function Job({jobOpenings, setWatchList}) {

    const [toggleDescription, setToggleDescription] = useState(false)
    const {title, company, category, logo, description, jobtype, salary, url} = jobOpenings
    const user = useContext(UserContext)
  
  const desc = description?.replace(/<[^>]+>/g, '')?.substring(0, 200)
  const wholedesc = description.replace(/<[^>]+>/g, '')

 function handleToggleDescription() {
    setToggleDescription(!toggleDescription)
 }

 function handleWatchlist(){
     const job = {title, company, category, logo, description, jobtype, salary, url}
    setWatchList(jobOpenings)
        fetch(`/applications`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                job: job,
                application: {user_id: user.id}
                
            })
        })
 }


// const html = description;
// const text = convert(html, {
//   wordwrap: 130
// });
// console.log(text); 

    return (

        
      <Card>
          <Card.Body>
              <div className='d-flex justify-content-between'>
                   <div>
                       <Card.Title>
                           {title} - {company} - <span className='text-muted font-weight-light'>{category}</span>
                       </Card.Title>
                       <Card.Subtitle className='text-muted mb-2'>
                           {salary}
                       </Card.Subtitle>
                       <Badge variant="secondary" className='ml-2'>{jobtype}</Badge>
                       <div>
                       <a href={url} target="_blank">APPLICATION</a>
                       </div>
                   </div>
                   <img className='d-none d-md-block' height="75" alt={company}  src={logo}/> 
              </div>
              <Card.Text>
                <Button  onClick={handleToggleDescription} variant="primary" Width="25" >Details</Button> <Button onClick={handleWatchlist}>WatchList</Button>
                {
                !toggleDescription 
                ? 
            <>
                <p>{desc}...</p>
            
            </>    
                :
            <>
                <p>{wholedesc}</p>
                <Button onClick={handleToggleDescription}>See Less</Button>
            </>  
                }
              </Card.Text>
          </Card.Body>
      </Card>


    )
}

export default Job;