import './ContactPage.css';
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Modal from "../components/Modal";
// import contactSVG from "../public/svg/Mediamodifier-Design.svg";
import {ReactComponent as ContactSVG} from "../public/svg/image(3).svg";

//#6BFF63
//#C8E6C9

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const form = useRef();
    const svg = useRef();

    // if(svg.current)
    //     svg.current.setAttribute('fill', 'red');

    function test() {

    }

    // if(svg.current)
    // svg.current.firstChild.setAttribute('fill', 'teal')
    // // console.log(svg.current.getAttribute('fill'));


    const sendEmail = (e) => {
        e.preventDefault();

        // form.current.name = name;

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setShowModal(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <button className="contact-form--button" onClick={handleClose}>Close</button>
    </div>;

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p className="contact-modal--miniheading">Email Sent</p>
        <h2 className="contact-modal">Thank you for contacting us</h2>
        <p className="contact-text">Our team of certified professionals will reach out to you</p>
    </Modal>;

    return (

        <div className="section-contact">
            {showModal && modal}

            <div className="container">
                <div className="contact-container">
                    <p className="contact-miniheader text-center">Contact Me</p>
                    <h2 className="text-center contact-header">Looking forward to hearing from you!</h2>
                    <div className="grid grid-2-cols contact-grid-container">
                        <div className="contact-form--container">
                            <form ref={form} onSubmit={sendEmail} className="contact-form">
                                <input className="contact-form--input" onChange={(e) => setName(e.target.value)}
                                       value={name} type="text" name="user_name" placeholder="Your Name"/>
                                <input className="contact-form--input" onChange={(e) => setEmail(e.target.value)}
                                       value={email} name={"user_email"}
                                       type="email" placeholder="Your@Email.com"/>
                                <textarea onChange={(e) => setMessage(e.target.value)}
                                          value={message} placeholder="Your Message" name={"message"}/>
                                <input className="contact-form--button" type="submit" value="Send Email"/>

                            </form>
                        </div>
                        <div className={"contact-image"}>
                            {/*<h3 className="contact-subheader">Connect with Us: Reach Out for a Consultation</h3>*/}
                            {/*<p className="contact-text">Our team of experts will work with you to understand your unique*/}
                            {/*    needs and develop solutions to help you achieve smarter business*/}
                            {/*    outcomes. We're ready to help optimize your costs, maximize your performance, and*/}
                            {/*    evolve for a changing market.</p>*/}
                            {/*<img src={contactSVG} className={'test'} alt=""/>*/}
                            <ContactSVG className={'test'}/>
                            {/*{test()}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ContactPage;