import './Job.css'
import { Card } from 'react-bootstrap'

function Job({ description, salary, link, title, logo, company, location }) {

    return (
       <Card>
            <Card.Body>
                <div className='d-flex justify content-between'>
                     <div>
                         <Card.Title>
                            {title} - <span className='text-muted font-weight-light'>{company}</span>
                         </Card.Title>
                     </div>
                </div>
            </Card.Body>
       </Card>
    )
}

export default Job;