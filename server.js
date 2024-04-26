const express = require('express');
const path = require('path'); 
const app = express();
const port = 8042; // Or any port you prefer

// Serve the static 'index.html' file and any other static files
app.use(express.static(path.join(__dirname, ''))); 

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});