const express = require( 'express' );
const router = express.Router();
const person = require('./../models/person');


router.post('/', async (req, res) =>{
    try{
        const data = req.body
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('data Saved');
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(404).json({error:'Internal Server Error'});
    }
})

router.get('/', async(req, res) =>{
    try{
        const data = await person.find();
        console.log("Data Fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});   
    }
})

router.put('/:id', async(req, res) =>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await  person.findByIdAndUpdate(personId, updatedPersonData,{
            new:true,
            runValidators: true,
        })

        if (!response){
            return res.status(404).json({error:"Person not Found"})
        }
        console.log('Data Fetched');
        res.status(200).json(response);
    
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'}); 
    }
})

module.exports = router;