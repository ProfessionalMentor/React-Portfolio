import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div id="contact">
        <h1>Contact</h1>
        <form action="">
        <input type="Name" placeholder='Name'/>
        <input type="email"  placeholder='Email' />
        <input type="message" placeholder='Message'  />
        <input type="file" />
        <br />
        <br />
        <br />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact