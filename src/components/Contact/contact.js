import React from "react";
import {
  ContactSection,
  ContactTitle,
  Span,
  Form,
  FormInput,
  InputText,
  InputEmail,
  InputSub,
  InputSubmit,
  Textarea
} from "./style.js";
const Contact = () => {
  return (
    <ContactSection>
      <div class="container">
        <ContactTitle>
          <Span>Drop </Span>Me A line
        </ContactTitle>
        <Form action="">
          <FormInput>
            <InputText type="text" placeholder="Your Name" />
            <InputEmail type="email" placeholder="Your Email" />
          </FormInput>
          <InputSub type="text" class="sub" placeholder="Your Subject" />
          <Textarea cols="30" rows="10" placeholder="Your Message" />
          <InputSubmit type="submit" value="Send Message" />
        </Form>
      </div>
    </ContactSection>
  );
};

export default Contact;
