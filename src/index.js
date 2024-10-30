require('dotenv').config();
const express = require('express');
const userController = require('./controllers/userController');
const app = express();
app.use(express.json());
app.use('/api/users', userController);

const port =  process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`servidor corriendo en http://localhost:${port}`)
}
)