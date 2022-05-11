import Job from "./Job";
import './JobContainer.css'
import {Container} from "react-bootstrap"

function JobContainer({jobOpenings}){

    let mappedJobs = jobOpenings.map((openjob) => {
        return <Job handleWatchlist={handleWatchlist} key={openjob.id} title={openjob.title} company={openjob.company} category={openjob.category} logo={openjob.logo} description={openjob.description} salary={openjob.salary} jobtype={openjob.jobtype} url={openjob.url}/>
    
    })
    


    return (
        <Container>
            {mappedJobs}
        </Container>
        

    )
}

export default JobContainer;