import Job from "./Job";
function JobContainer({jobOpenings}){

    let mappedJobs = jobOpenings.map((openjob) => {
        return <Job key={openjob.id} description={openjob.description} salary={openjob.salary} link={openjob.link} title={openjob.title}/>
    
    })

    return (
        <div className="job-container">
            {mappedJobs}
        </div>
        

    )
}

export default JobContainer;