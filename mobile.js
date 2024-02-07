// Importing required modules
const express = require('express');

// Creating an instance of Express
const app = express();
const PORT = 3000; // You can set any port number you like

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Sends 'Hello, World!' as the response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
