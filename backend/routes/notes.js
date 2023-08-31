const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const fetchUser = require('../middleW/fetchUser');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get all notes using GET.
router.get('/fetchAllNotes', fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});

// ROUTE 2: Add a new note using POST.
router.post('/addNote', fetchUser, [
    body('title', 'Enter a valid name').isLength({ min: 4 }),
    body('description', 'Description should be of at least 10 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});

// ROUTE 3: Update an existing note using PUT.
router.put('/updateNote/:id', fetchUser,
    async (req, res) => {
        const { title, description, tag } = req.body;
        try {
            const newNote = {};
            if (title) newNote.title = title;
            if (description) newNote.description = description;
            if (tag) newNote.tag = tag;

            let note = await Note.findById(req.params.id);
            if (!note) {
                return res.status(404).send("Not Found");
            }
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed");
            }
            note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
            res.json({ note });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some error occurred");
        }
    });

// ROUTE 4: Delete an existing note using DELETE.
router.delete('/deleteNote/:id', fetchUser,
    async (req, res) => {
        try {
            let note = await Note.findById(req.params.id);
            if (!note) {
                return res.status(404).send("Not Found");
            }
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed");
            }
            note = await Note.findByIdAndDelete(req.params.id);
            res.json({ "Success": "Note has been deleted", note });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some error occurred");
        }
    });

module.exports = router;
