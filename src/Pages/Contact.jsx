import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <div className="box max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="title text-center mb-6">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are always ready to help with any queries regarding the community. Feel free to contact us.
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your Message"
              rows="5"
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
