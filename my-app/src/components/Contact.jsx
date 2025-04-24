import React, {useState} from 'react';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_aiftk9b',
            'template_26g6hp5',
            formData,
            'Viphl7wyKglQ_mLOY'
        )
            .then(() => {
                alert('Message sent successfully!');
                setFormData({name: '', email: '', message: ''});
            })
            .catch(() => {
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <div className="contact" id="CONTACT">
            <h1 className="header">contact me</h1>
            <p className="sub-header">send me a message!</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="john doe"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@gmail.com"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="hello..!"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
}

export default Contact;