//El script contiene todas las conexiones de mongoDB de la base de datos
const mongoose = require('mongoose');



mongoose.connect(
    process.env.MONGO_URI
    ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then( () => {
    console.log('Connected to Mongo DB')
})
.catch(err => {
    console.log('Error connecting to database', err.message);
})
