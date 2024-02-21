const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser.js");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Route 1 : Get All user notes: GET "/api/notes/getuser".login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

//Route 2 : Add a new Note : POST "/api/notes/addnote".login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a Title").isLength({ min: 3 }),
    body("description", "Description  must be atleast 5 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //check for errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    }catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
      }
  }
);

//Route 3 : Update an existing Note : PUT "/api/notes/updatenote".login required
router.put(
  "/updatenote/:id",
  fetchuser,async (req, res) => {
    try {
        const {title,description,tag}= req.body;

        //Create a newNote Object
        const newNote = {};
        if(title){newNote.title = title};
        if(description){newNote.description = description};
        if(tag){newNote.tag = tag};

        //Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if(!note)
        {
            res.status(404).send("Not found");
        }
        console.log(note.user);
        if(note.user.toString() !== req.user.id)
        {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        res.json({note});

    }catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
      }
  }
);


//Route4  : Delete an existing Note : DELETE "/api/notes/deletenote".login required
router.delete(
  "/deletenote/:id", 
  fetchuser,async (req, res) => {
    try {
        // const {title,description,tag}= req.body;

        //Find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id);
        if(!note)
        {
            res.status(404).send("Not found");
        }
        console.log(note.user);

        //Allow deletion only if user owns this note
        if(note.user.toString() !== req.user.id)
        {
            return res.status(401).send("Not Allowed");
        } 

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({"Success":"Note has been deleted",note:note});

    }catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
      }
  }
);



module.exports = router;
