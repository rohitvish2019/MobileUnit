// Importing required modules
const express = require('express');

// Creating an instance of Express
const app = express();
const PORT = 3000; // You can set any port number you like
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));
// Define a route for the homepage
app.use('/', require('./routes/index'))

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
