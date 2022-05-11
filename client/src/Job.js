import './Job.css'

function Job({ description, salary, link, title, logo, company, location }) {

    return (
        <>
            <div className='total-card'>
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    <h2>{company}</h2>
                </div>
                <div className='logo-image'>
                    <img src={logo} alt="pic of" />
                </div>
                <p>${salary}</p>
                <p>{location}</p>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Job;