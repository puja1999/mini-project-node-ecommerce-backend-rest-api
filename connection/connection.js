const mongoose = require('mongoose')

//connect to cluster
mongoose.connect('mongodb+srv://pallavi:pallavi@1998@cluster0.iy1x9.mongodb.net/ecommerce?retryWrites=true&w=majority', 
{
    useNewUrlParser :true,
    useUnifiedTopology : true,
    useFindAndModify : false,
    useCreateIndex: true 
})
.then(ok => console.log("connected to mongodb"))
.catch(err => console.log("mongodb connection error",err))

module.exports = mongoose