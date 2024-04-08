const express = require( 'express' );
const router = express.Router();
const MenuItem = require('./../models/menu');


router.post('/', async (req, res) =>{
    try{
        const data = req.body
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
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
        const data = await MenuItem.find();
        console.log("Data Fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});   
    }
})

//comment for testing purpose

module.exports = router;