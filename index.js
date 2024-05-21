const express = require('express');
const database_connection = require('../todoapp_backend/config/db');
database_connection();

const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`port is running  ${port}`)
});
    

