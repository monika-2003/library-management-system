const express = require('express');
const router = express.Router();
const AddedBooks = require('../models/AddedBooks');

router.post('/bookAdded', async (req, res)=> {
    const book = req.body;
    const addedBook = new AddedBooks(book)
    try{
        // AddedBooks.create({
        //     Category: req.body.category,
        //     Title: req.body.title,
        //     Id: req.body.id,
        //     Author: req.body.author,
        //     Description: req.body.description
        // })

        await addedBook.save();
        res.status(200).json(addedBook);
    }

    catch (err) {
        res.status(409).json({message: err.message});
    }
})

router.get('/getBooks', async(req, res) => {
    try {
        const storedBooks = await AddedBooks.find();
        console.log(storedBooks);
        res.status(200).json(storedBooks);
    }
    catch(err) {
        res.status(404).json({message: err.message});
    }
})

module.exports = router;