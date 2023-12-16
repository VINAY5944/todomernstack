const mongoose=require('mongoose');



const connection=()=>{


    try {
        const connect=mongoose.connect('mongodb+srv://vinay1:qwerty123@cluster0.bukhvfq.mongodb.net/?retryWrites=true&w=majority')
        console.log('connected to database');

    } catch (error) {


        process.exit()
    }
    
}
module.exports=connection