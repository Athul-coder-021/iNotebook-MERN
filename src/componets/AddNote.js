import React , { useContext, useState }  from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note,setNote]=useState({title:"",description:"",tag:""})
    const handleClick = (e)=>{
        e.preventDefault(); // prevents page from reloading
        addNote(note.title,note.description,note.tag);
    }
    
    const onChange = (e)=>{//...noe is using spread operator
        //here we are saying that jho bhi value hai pehle se voh rhe aur jho change ho rha hai usko update kare
        setNote({...note,[e.target.name]:e.target.value})
    }

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
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              onChange={onChange}
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group my-3">
            <label for="desc">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter Description"
              onChange={onChange}
            />
          </div>
          <div className="form-check my-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
