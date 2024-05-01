const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Route to handle form submission
app.post('/submit', (req, res) => {
    console.log(req.body); // Log the form data to the console
    res.json({ message: "Form data received", data: req.body });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});