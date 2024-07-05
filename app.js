require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

require('./db'); // Ensure this file correctly sets up your MongoDB connection
const cors = require('cors')
const PORT = process.env.PORT || 2345;
app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use(morgan('dev'));

app.use('/', routes);  

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
}); 
       