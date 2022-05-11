import React, {useEffect} from "react";

function WatchList({watchList}){

    const {title, company, category, logo, description, jobtype, salary, url} = watchList

    return (

        useEffect( () => {
        
            fetch(`/applications`)
            .then( res => res.json())
            .then( data => console.log(data))
            .catch( error => console.log(error.message));

        },[])
    )
}


    //     <>
    //     <div>
    //     <h2>{title}</h2>
    //     <h2>{company}</h2>
    // </div>
    // <div>
    //     <h1>{category}</h1>
    // </div>
    // <div className='logo-image'>
    //     <img src={logo} alt="pic of" />
    // </div>
    // <p>${salary}</p>
    // <p>{jobtype}</p>
    // </>
    // )

export default WatchList;