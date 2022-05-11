import './Job.css'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
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
                <Button  variant="primary" Width="25" >Details</Button> <Button>WatchList</Button>
              </Card.Text>
              <Collapse >
                <div className='mt-4'>
                  <Card.Text>{description}</Card.Text>
                </div>
              </Collapse>
          </Card.Body>
      </Card>

    //             {
    //             !toggleDescription 
    //             ? 
    //         <>
    //             <p>{desc}...</p>
    //             <button onClick={handleToggleDescription}>Continue Reading</button>
    //         </>    
    //             :
    //         <>
    //             <p>{wholedesc}</p>
    //             <button onClick={handleToggleDescription}>See Less</button>
    //         </>  
    //             }
                
    //             <button onClick={handleWatchlist}>Add to Watch List</button>  
            
    //    </>

    )
}

export default Job;