import React, {useState} from 'react';
import '../styles/Contact.css';

// function Contact() {
//     return (
//         <div class="container">
//             <div class="row align-items-start">
//                 <div class="col-3">
//                     <div class="title">Contact</div>
//                 </div>
//             </div>
//         </div>
//     );
// }

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (!errorMessage) {
    //     console.log('Submit Form', formState);
    //   }
    };
  
    const handleChange = (e) => {}
      
    // if (!e.target.value.length) {
    //       setErrorMessage(`${e.target.name} is required.`);
    //     } else {
    //       setErrorMessage('');
    //     }
    // }
    // if (!errorMessage) {
    //     setFormState({ ...formState });
    //     console.log('Handle Form', formState);
    //   }
    
  
    return (
      <section className="contact-form" >
        <h1 className="contact-form-title" >Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-input">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className="contact-form-input">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="contact-form-input">
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button className="contact-form-button" data-testid="button" type="submit">Submit</button>
        </form>
      </section>
    );
}

export default Contact;