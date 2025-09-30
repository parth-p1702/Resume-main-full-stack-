const express = require('express');
const dotenv = require('dotenv');
//dotenv config
dotenv.config();
const cors = require('cors');
const mongoDB = require('./config/db');
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const resumeRoutes = require('./routes/resume.route');

const app = express();

const PORT = process.env.PORT 


//database config   
mongoDB();


app.use(express.json());
//middlewares
app.use(cors());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/data', resumeRoutes);

//middleware for logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(PORT, () => {
     console.log(`Server is working on http://localhost:${PORT}`);
    // console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
