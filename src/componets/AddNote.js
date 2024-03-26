import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault(); // prevents page from reloading
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" })
    props.showAlert("Note added Successfully","success");
  };

  const onChange = (e) => {
    //...noe is using spread operator
    //here we are saying that jho bhi value hai pehle se voh rhe aur jho change ho rha hai usko update kare
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form className=" container my-3">
          <div className="form-group my-3">
            <label for="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group my-3">
            <label for="desc">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              placeholder="Enter Description"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group my-3">
            <label for="desc">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              placeholder="Enter Tag"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <button
            disabled={note.title.length<5 || note.description.length<5}
            type="submit"
            className="btn btn-primary my-3"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
