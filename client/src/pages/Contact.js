import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import '../resources/DefaultLayout.css';
import { Button } from 'antd';


function Contact() {
  return (
    <DefaultLayout>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="04214da6-589b-4dc4-b256-48c803bb10d4" />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
          </div>
          <Button type='primary' htmlType='submit'>Submit</Button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default Contact;
