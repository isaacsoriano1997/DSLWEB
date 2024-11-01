require('dotenv').config();
const express = require('express');
const userController = require('./controllers/userController');
const rolController = require('./controllers/rolContronller');
const app = express();
app.use(express.json());
app.use('/api/users', userController);
app.use('/api/rol', rolController);

const port =  process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`servidor corriendo en http://localhost:${port}`)
}
)