import React, {useEffect,useState} from 'react'
import Navbar from './Navbar'
import JobContainer from './JobContainer';

function Main() {

const [jobOpenings,setJobOpenings]= useState([])
const [wishList, setWishList] = useState({
    title: '',
    company: '',
    category: '',
    logo: '',
    description: '',
    jobtype: '',
    salary: 0,
    url: ''
})
console.log(jobOpenings)

function handleWatchlist(){

}

useEffect( () => {

    fetch(`https://remotive.com/api/remote-jobs`)
    .then( res => res.json())
    .then( data => setJobOpenings(data.jobs.map((job) => ({
       
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
        <JobContainer handleWatchlist={handleWatchlist} jobOpenings={jobOpenings} />
    </div>
  )
}

export default Main;

// title: job.title,
// company: job.company_name,
// category: job.category,
// logot: job.company_logo,
// description: job.description,
// jobtype: job.job_type,
// salary: job.salary,
// url: job.url