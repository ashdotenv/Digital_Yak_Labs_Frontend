const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

// POST route to handle form submissions
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter with SMTP settings (replace with your email service)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abhayabikramshahiofficial@gmail.com', // Replace with your email
      pass: 'abhaya@123',  // Replace with your email password or app-specific password
    },
  });

  // Email message configuration
  const mailOptions = {
    from: email, // Sender's email
    to: 'abhayabikramshahiofficial@gmail.com', // Replace with the recipient's email
    subject: `New message from ${name}`,
    text: `Message: ${message}\n\nFrom: ${name}\nEmail: ${email}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
