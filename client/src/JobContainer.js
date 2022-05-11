import Job from "./Job";
import './JobContainer.css'
import {Container} from "react-bootstrap"

function JobContainer({jobOpenings}){

    let mappedJobs = jobOpenings.map((openjob) => {
        return <Job key={openjob.id} description={openjob.description} salary={openjob.salary} link={openjob.link} title={openjob.title} logo={openjob.logo} location={openjob.location} company={openjob.company} />
    
    })

    return (
        <Container>
            {mappedJobs}
        </Container>
        

    )
}

export default JobContainer;