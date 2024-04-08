const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    Name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required: false
    }
})

const Person = mongoose.model('Person', personSchema)
module.exports = Person;