import { useState } from "react"; 
import "./modal.css";

interface IEmailjsModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const EmailjsModal: React.FunctionComponent<IEmailjsModalProps> = (props) => {
  const { showModal, closeModal } = props;
  
  if(showModal){
      return (
      <div className="modal">
        <div className='overlay' onClick={closeModal}></div>
        <div className="modal_content">
          <p className="modal_text">Thanks, Message Received!</p>
          <button className="close" onClick={closeModal}>&times;</button>
        </div>
      </div>
    );
  } 
  return <></>;
};

export default EmailjsModal;
