import React from 'react'
import Navbar from './Navbar'
import emailjs from "emailjs-com"

const SERVICE_ID = "service_gq5doqm";
const TEMPLATE_ID = "template_brymyej";
const USER_ID = "fYyeAv8MQt7b0bbgh";

function Contact() { 
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target , USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
          .then(alert("Your email has been sent"));
          e.target.reset()
      };
        return (
            <>
                <div>
                    <Navbar />
                </div>
                <div>
                    <form  onSubmit={sendEmail}>
                        <div className='form-inner'>
                        
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" name="name" ></input>
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input  name="email" ></input>
                            </div>
                            <div className='form-group'>
                                <label>Message</label>
                                <textarea type="textfield" name="message">  </textarea>
                            </div>
                        <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    export default Contact;

              