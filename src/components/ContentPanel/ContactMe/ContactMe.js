import React, { Component } from "react";
import Heading from "../../TextDisplay/Heading";
import Paragraph from "../../TextDisplay/Paragraph";
import ContactPlatforms from "./ContactPlatforms";
import { contactMeText, otherPlatforms } from "./ContactMeContent";

class ContactMe extends Component {
  render() {
    return (
      <div className="contact-me">
        <Heading heading="Contact me" />
        <div className="contact-me-content">
          {" "}
          <Paragraph text={contactMeText} />
          <ContactPlatforms platforms={otherPlatforms} />
        </div>
      </div>
    );
  }
}

export default ContactMe;
