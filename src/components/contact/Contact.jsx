import "./contact.scss"
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState(false)
    const handlesubmit = (e)=> {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.png" alt="contact" />
            </div>
            <div className="right">
                <h2>Contact Me.</h2>
                <form onSubmit={handlesubmit}>
                    <input type="text"  placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks for reaching out, I'll reply shortly</span>}
                </form>
            </div>
            
            
        </div>
    )
}
