import React, {useEffect,useState} from "react";
import Navbar from './Navbar'
import { Card, Badge, Button, Collapse, Container } from 'react-bootstrap'




function WatchList({watchList}){

    const [watchToggle,setWatchToggle]=useState(false)

    function handleWatchToggle() {
        setWatchToggle(!watchToggle)
        alert('Congratulations')
    }

    const {title, company, category, logo, description, jobtype, salary, url} = watchList
    
    
    // useEffect( () => {
    
    //     fetch(`/applications`)
    //     .then( res => res.json())
    //     .then( data => console.log(data))
    //     .catch( error => console.log(error.message));

    // },[])
    return (
        <div>
           <div>
               <Navbar />
            </div> 
            <div>
                <h1 className="Applied">Applied List</h1>
            </div>

            {
                !watchToggle
                ?
            

            <Container>
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
                            </div>
                        </div>
                        <img className='d-none d-md-block' height="75" alt={company}  src={logo}/> 
                    </div>
                    <Card.Text>
                        <button  onClick={handleWatchToggle} className="Hired" >Hired</button> 
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        :
        null
            }
      </div>   
    )
}


    //     <>
    //     <div>
    //     <h2>{title}</h2>
    //     <h2>{company}</h2>
    // </div>
    // <div>
    //     <h1>{category}</h1>
    // </div>
    // <div className='logo-image'>
    //     <img src={logo} alt="pic of" />
    // </div>
    // <p>${salary}</p>
    // <p>{jobtype}</p>
    // </>
    // )

export default WatchList;

