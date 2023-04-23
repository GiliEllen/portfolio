import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    //@ts-ignore
    <div className="contact grid-contact" >
       {/* @ts-ignore */}
      <div className="pos-con" name="contact"></div>
      <div className="contact__header">
        <h1 className="contact__header__main">get in touch</h1>
        <div className="line"></div>
      </div>

      <form
        className="form-container"
        method="post"
        action="https://getform.io/f/842272fb-302b-4d62-9579-d72fc436b4cf"
      >
        <div className="input-container">
          <label className="label-large">Name</label>
          <input
            className="input-text"
            type="text"
            name="user_name"
            onChange={(ev: any) => {
              setUserName(ev.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <label className="label-large">Email</label>
          <input
            className="input-text"
            type="email"
            name="user_email"
            onChange={(ev: any) => {
              setEmail(ev.target.value);
            }}
          />
        </div>

        <div className="input-container">
          <label className="label-large">Message</label>
          <textarea
            className="input-text input-text--text-area"
            name="message"
            onChange={(ev: any) => {
              setMessage(ev.target.value);
            }}
          />
        </div>

        <input className="btn btn--contact" type="submit" value="Send" />
      </form>
    </div>
  );
};
export default Contact;
