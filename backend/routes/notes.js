const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser.js");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Route 1 : Get All user notes: GET "/api/auth/getuser".login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

//Route 2 : Add a new Note : POST "/api/auth/addnote".login required
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

module.exports = router;
