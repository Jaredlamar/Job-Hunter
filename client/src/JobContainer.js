import Job from "./Job";
import './JobContainer.css'
function JobContainer({jobOpenings, handleWatchlist}){

    let mappedJobs = jobOpenings.map((openjob) => {
        return <Job handleWatchlist={handleWatchlist} key={openjob.id} title={openjob.title} company={openjob.company} category={openjob.category} logo={openjob.logo} description={openjob.description} salary={openjob.salary} jobtype={openjob.jobtype} url={openjob.url}/>
    
    })
    


    return (
       
        <div className="job-container">
            {mappedJobs}
        </div>
     

    )
}

export default JobContainer;