const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

//	Connect Database
connectDB();
app.use(express.json({extended:false}));


app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



