import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
// import emailjs from '@emailjs/browser';
const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameValidation, setNamevalidation] = useState(false);
  const [Emailvalidation, setEmailvalidation] = useState(false);
  const [mesgvalidation, setMesgvalidation] = useState(false);
  const form = useRef();
  const sendbtn = (e) => {
    e.preventDefault();
    if (name === "" || name === undefined || name === null) {
      // toast.warning("Please Enter Name...!");
      setNamevalidation(true);
    }
    if (email === "" || email === undefined || email === null) {
      setEmailvalidation(true);
    }
    if (message === "" || message === undefined || message === null) {
      setMesgvalidation(true);
    } else {
      toast.success("Succefully send ...!");
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("Desc", message);
      setNamevalidation(false);
      setEmailvalidation(false);
      setMesgvalidation(false);
    }
  };
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  return (
    <form ref={form}>
      <FormStyle>
        <div className="form-group" id="nameid">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
            />
          </label>
          {nameValidation && (
            <label style={{ color: "#BCB4B4", float: "right" }}>
              Please Enter Name..!
            </label>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={20}
            />
          </label>
          {Emailvalidation && (
            <label style={{ color: "#BCB4B4", float: "right" }}>
              Please Enter Name..!
            </label>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
            />
          </label>
          {mesgvalidation && (
            <label style={{ color: "#BCB4B4", float: "right" }}>
              Please Enter Your Description..!
            </label>
          )}
        </div>
        <button type="submit" onClick={(e) => sendbtn(e)}>
          Send
        </button>
      </FormStyle>
    </form>
  );
}
