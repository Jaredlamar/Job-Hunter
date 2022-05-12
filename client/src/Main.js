import React, {useEffect,useState} from 'react'
import Navbar from './Navbar'
import JobContainer from './JobContainer'
import Search from './Search';

function Main({setWatchList}) {

const [jobOpenings,setJobOpenings]= useState([])
const [jobSearch, setJobSearch]=useState('')


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
const displayedJobs = jobOpenings.filter((jobOpening) => {
  return jobOpening.title.toLowerCase().includes(jobSearch.toLowerCase());
});

  return (
    <div>
        <Navbar />
        <div>
          <Search jobSearch = {jobSearch} onSearchChange={setJobSearch}/>
        </div>
        <div>
          <JobContainer displayedJobs={displayedJobs} setWatchList={setWatchList} />
        </div>
    </div>
  )
}

export default Main;

