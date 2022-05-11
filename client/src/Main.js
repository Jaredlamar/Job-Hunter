import React, {useEffect,useState} from 'react'
import Navbar from './Navbar'
import JobContainer from './JobContainer';

function Main({setWatchList}) {

const [jobOpenings,setJobOpenings]= useState([])


// console.log(jobOpenings)


useEffect( () => {

    fetch(`https://remotive.com/api/remote-jobs`)
    .then( res => res.json())
    .then( data => setJobOpenings(data.jobs.map((job) => ({
        
        id: job.id,
        title: job.title,
        company: job.company_name,
        category: job.category,
        logo: job.company_logo,
        description: job.description,
        jobtype: job.job_type,
        salary: job.salary,
        url: job.url
    }))))
},[])
  return (
    <div>
        <Navbar />
        <JobContainer jobOpenings={jobOpenings} setWatchList={setWatchList} />
    </div>
  )
}

export default Main;

