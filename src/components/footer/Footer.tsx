import * as React from 'react';
import phone from '../../assets/phone.svg';
import email from '../../assets/email.svg';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <div className='footer'>
        <div className='parent-box'><div className='child-box'></div></div>

            <div className='contact-info'>
                <img src={phone} className="icon" />
                <div>
                    <p>Call me</p>
                    <p>+995555553672</p>
                </div>
            </div>
            <div className='contact-info'>
                <img src={email} className="icon" />
                <div>
                    <p>Email me</p>
                    <p>kheoshvili.dato@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;