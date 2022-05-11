import './Job.css'

function Job({ title, company, category, logo, description, jobtype, salary, url }) {
  
    
    return (
        <>
            <div className='total-card'>
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    <h2>{company}</h2>
                </div>
                <div>
                    <h1>{category}</h1>
                </div>
                <div className='logo-image'>
                    <img src={logo} alt="pic of" />
                </div>
                <p>${salary}</p>
                <p>{jobtype}</p>
                <p>{description}</p>
                {/* <button onClick={handleWatchlist}>Add to Watch List</button> */}
            </div>
        </>
    )
}

export default Job;