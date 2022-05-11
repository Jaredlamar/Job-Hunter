import React, {useState} from 'react'
import './Job.css'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'



function Job({ title, company, category, logo, description, jobtype, salary, url }) {

    
    
  
    
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
    )
}

export default Job;