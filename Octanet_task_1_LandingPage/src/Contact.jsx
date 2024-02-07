import React from 'react'
import "./Contact.css";

function Contact() {
    return (
        <>
            <div id='contact-wrapper'>
                <h2 id='contact-heading'>Contact Us</h2>
                <form>
                    <input name="name" type="text" class="feedback-input" placeholder="Name" />
                    <input name="email" type="text" class="feedback-input" placeholder="Email" />
                    <textarea name="text" class="feedback-input" placeholder="Tell us about the location you want to travel to, and we will send the catalogue"></textarea>
                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
        </>
    )
}

export default Contact;