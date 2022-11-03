import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <div className='contact'>
        
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me aboout anything you have in mind.</p>
        <form action="#">
            <div className="names">
                <div className="firstName flex">
                    <label>First name</label>
                    <input type="text" id='first_name'  placeholder='Enter your first name'/>
                </div>
                <div className="lastName flex">
                    <label>Last name</label>
                    <input type="text" id='last_name' placeholder='Enter your last name' />
                </div>
            </div>
            <div className="email flex">
                <label>Email</label>
                <input type="text" id='email' placeholder='yourname@email.com' />
            </div>
            <div className="message flex">
                <label>Message</label>
                <textarea name="" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
            </div>
            <div className="agree">
                <input type="checkbox" />
                <p>You agree to providing your data to sito who may contact you.</p>
            </div>
            <div className="btn">
                <button id='btn_submit'>Send message</button>
            </div>
        </form>

    </div>
  )
}

export default Contact