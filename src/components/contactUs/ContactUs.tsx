import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import profile from '../../assets/profile.svg';
import email from '../../assets/email2.svg';
import EmailjsModal from '../emailjsModal/EmailjsModal';

export const ContactUs = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_qrv0bxf', 'template_3hcq9dl', form.current, '5kC7OrDb-AjXFr7hM')
      .then((result) => {
        handleOpenModal();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className='input_container'>
        <img className='icon' src={profile} />
        <input type="text" name="user_name" className='name_input' placeholder='Name' required/>
      </div>
      <div className='input_container'>
        <img className='icon' src={email} />
        <input type="email" name="user_email" className='email_input' placeholder='Email' required/>
      </div>
      <textarea name="message" className='text_input' placeholder='Type message here' required/>
      <EmailjsModal showModal={showModal} closeModal={handleCloseModal} />
      <input type="submit" value="Send" className='submit_btn'/>
    </form>
  );
};