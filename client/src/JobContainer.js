import Job from "./Job";
import './JobContainer.css'
import {Container} from "react-bootstrap"

function JobContainer({jobOpenings, setWatchList}){

    let mappedJobs = jobOpenings.map((openjob) => {
        return <Job  key={openjob.id} jobOpenings={openjob} setWatchList={setWatchList}/>
    
    })
    


    return (
        <Container>
            {mappedJobs}
        </Container>
        

    )
}

export default JobContainer;