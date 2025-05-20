import { useRef } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      '-ssf5mV4umc0atD_F',
      'template_6smy9tv',
      form.current,
      'service_d4wl0ct'
    ).then(
      (result) => {
        alert('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5" 
                required 
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;