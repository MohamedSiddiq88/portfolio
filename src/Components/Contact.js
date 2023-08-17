import React, { useState, useEffect } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  "Thank you" message
    setShowThankYou(true);

    try {
      const response = await fetch('https://portfolio-express-sand.vercel.app/mail/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        
      } else {
        console.log('Failed to send email');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // reset the "Thank you" message after a delay
  useEffect(() => {
    let timeout;
    if (showThankYou) {
      timeout = setTimeout(() => {
        setShowThankYou(false);
      }, 5000); 
    }

    return () => clearTimeout(timeout);
  }, [showThankYou]);

  return (
    <div className="contact" id="contact">
      <div className="container col-lg-7">
        {showThankYou ? (
          <h1 className="thank-you">Thank you!</h1>
        ) : (
          <>
            <h1 className="heading">Hire Me.</h1>
            <p>
              If you have any inquiries or would like to collaborate, feel free to reach out to me.
              You can use the form below or connect with me through the provided contact information:
            </p>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group form-row">
                  <div className="collab-col">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="form-input transparent-input name-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="collab-col">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="form-input transparent-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter the subject"
                    className="form-input transparent-input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                    className="form-input transparent-input"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary contact-btn">
                  SUBMIT
                </button>
              </form>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='logo-container'>
                <div className='my-logo'>
                <i class="fa-solid fa-s my-logo-1"></i>
                <i class="fa-solid fa-s my-logo-2"></i>
                <i class="fa-solid fa-s my-logo-3"></i>
                <i class="fa-solid fa-s my-logo-4"></i>
                <i class="fa-solid fa-s my-logo-5"></i>
                
                
                </div>
                </div>
              </div>
              <div className='col-lg-6'>
              <div className="contact-info">
              <h3>Contact Information</h3>
              <ul>
                <li>
                  <strong>Email:</strong> diddiq88@gmail.com
                </li>
                <li>
                  <strong>Phone:</strong> +91 8870081217
                </li>
                <li>
                  <strong>LinkedIn:</strong>{' '}
                  <a href="linkedin.com/in/mohamed-siddiq-4a512716b">LinkedIn Profile</a>
                </li>
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/MohamedSiddiq88">GitHub Profile</a>
                </li>
              </ul>
            </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
