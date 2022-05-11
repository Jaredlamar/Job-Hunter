import Job from "./Job";
import './JobContainer.css'
function JobContainer({jobOpenings}){

    let mappedJobs = jobOpenings.map((openjob) => {
        return <Job key={openjob.id} description={openjob.description} salary={openjob.salary} link={openjob.link} title={openjob.title} logo={openjob.logo} location={openjob.location} company={openjob.company} />
    
    })

    return (
        <div className="job-container">
            {mappedJobs}
        </div>
        

    )
}

export default JobContainer;