import React, {useEffect,useState} from 'react'
import Navbar from './Navbar'
import JobContainer from './JobContainer';

function Main() {

const [jobOpenings,setJobOpenings]= useState([])
useEffect( () => {

    fetch(`/jobs`)
    .then( res => res.json())
    .then( jobs => setJobOpenings(jobs))
    .catch( error => console.log(error.message));
},[])
  return (
    <div>
        <Navbar />
        <JobContainer jobOpenings={jobOpenings} />
    </div>
  )
}

export default Main;