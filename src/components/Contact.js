import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <body className="contactBody">

        <div className="contact-form-container">

          <form action="https://15h7awb7ec.execute-api.us-east-2.amazonaws.com/prod/ClayMarksContact" method="POST" target="_blank" className="contact-form"  enctype="application/x-www-form-urlencoded">
            <p>Name<br />
            <input type="text" name="name" required />
            </p>
            <p>Your Email Address<br />
            <input type="text" name="email" required />
            </p>
            <p>Message<br />
            <textarea name="message" required className="contact-form-message-input" wrap="hard"></textarea>
            </p>
            <div className="contact-form-submit">
              <input type="submit" value = "Send" />
            </div>

          </form>

        </div>
      </body>
    );
  }
}

export default Contact;
