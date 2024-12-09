import React from 'react'

const Contact = () => {
 
  return (
    <div className="container mt-5 mb-5">
      <div className="row ">
        {/* Contact Form Section */}
        <div className="col-md-6 card shadow-lg p-4 border-0">
          <h2 className="mb-4 text-primary">Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="col-md-6">
          <div className="card shadow-lg p-4 border-0">
            <h4 className="card-title mb-3 text-primary">More Info</h4>
            <p><strong>Address:</strong> Tunisia , Kairouan </p>
            <p><strong>Phone:</strong> +216 23 824 210</p>
            <p><strong>Email:</strong> aymenbouhoula0@gmail.com</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact
