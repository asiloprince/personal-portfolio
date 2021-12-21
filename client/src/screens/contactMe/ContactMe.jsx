import React, { useState } from 'react'
import './contactMe.css'
import Typed from 'react-typed'
import getintouch from '../../images/getintouch.gif'
import load from '../../images/loading.gif'
import axios from 'axios'
import { toast } from 'react-toastify'



function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    // handle inputs
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const formSubmit = async (e) => {
        e.preventDefault();


        try {
            let data = {
                name,
                email,
                message,
            };

            setBool(true);

            const res = await axios.post(`/contact`, data);

            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false);
            } else if (res.status === 200) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBool(false);

                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div id='contact'>
            <div className='main-container'>
                <div>
                    <h1 className='title' style={{ textAlign: 'center' }}>Contact Me</h1>
                </div>
                <br />
                <div className="central-form">
                    <div className="col">
                        <h2 className="title">
                            <br />

                            <Typed
                                strings={[
                                    'Ooh! so you\'re Interested?',
                                    'Let\'s Work Together!',
                                ]}

                                typeSpeed={90}
                                backSpeed={70}
                                loop
                            />

                        </h2>

                    </div>
                    <div className="back-form">
                        <div className="img-back">
                            <h6>If you think I am qualified to work on your project, feel free to send me a message. However, if you have any other requests or questions, please don't hesitate to use the form.</h6>
                            <img src={getintouch} alt="" />
                        </div>
                        <form onSubmit={formSubmit}>
                            <p>{banner}</p>
                            <label htmlFor="name">Name</label>
                            <input type="text" onChange={handleName} value={name} />

                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={handleEmail} value={email} />

                            <label htmlFor="message">Message</label>
                            <textarea
                                type="text"
                                onChange={handleMessage}
                                value={message}
                                name="message"
                            />

                            <div className="send-btn">
                                <button type="submit">
                                    Send <i className="fa fa-paper-plane"></i>
                                    {bool ? (
                                        <b className="load">
                                            <img src={load} alt="" />
                                        </b>
                                    ) : (
                                        ""
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ContactMe
