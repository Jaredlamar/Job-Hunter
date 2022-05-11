import './Job.css'
import { Card } from 'react-bootstrap'

function Job({ title, company, category, logo, description, jobtype, salary, url }) {
  
    
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
                <div>
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
                <p>{description}</p>
                {/* <button onClick={handleWatchlist}>Add to Watch List</button> */}
            </div>
        </>
    )
}

export default Job;