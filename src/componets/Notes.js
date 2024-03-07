// import React , { useContext }  from "react";
// import noteContext from "../context/notes/noteContext";
// import NoteItem from "./NoteItem";
// import AddNote from "./AddNote";
// const Notes = () => {
//   const context = useContext(noteContext);
//   const { notes,addNote} = context;
//   return (
//     <>
//     <AddNote/>
//     <div className="row my-3">
//       <h1>Your Notes</h1>
//       {notes.map((note) => {
//         return <NoteItem key = {note._id} note={note}/>;
//       })}
//     </div>
//     </>
//   );
// };

// export default Notes;

import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;
  const [showModal, setShowModal] = useState(false);
  const [note, setNote] = useState({ id:"",etitle: "", edescription: "", etag: "" });
  useEffect(() => {
    getNotes();
  }, []);
  const updateNote = (currentNote) => {

    setShowModal(true);

    setNote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  };
  // const ref = useRef(null);

  const handleClick = (e) => {
    console.log("Updating the note ",note)
    e.preventDefault(); // prevents page from reloading
    // addNote(note.title, note.description, note.tag);
    editNote(note.id,note.etitle,note.edescription,note.etag)
    setShowModal(false);
  };

  const onChange = (e) => {
    //...noe is using spread operator
    //here we are saying that jho bhi value hai pehle se voh rhe aur jho change ho rha hai usko update kare
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddNote />

      <button
        // ref={ref}
        type="button"
        class="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => setShowModal(true)}
      >
        Launch demo modal
      </button>

      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit your Note
                </h5>
              </div>
              <div className="modal-body">
                <form className=" container my-3">
                  <div className="form-group my-3">
                    <label for="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="emailHelp"
                      placeholder="Enter Title"
                      onChange={onChange}
                      value={note.etitle}
                    />
                  </div>
                  <div className="form-group my-3">
                    <label for="desc">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      placeholder="Enter Description"
                      onChange={onChange}
                      value={note.edescription}
                    />
                  </div>
                  <div className="form-group my-3">
                    <label for="desc">Tag</label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      placeholder="Enter Tag"
                      onChange={onChange}
                      value={note.etag}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button onClick={handleClick} type="button" className="btn btn-primary">
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container mt-3">
        <h1 className="mb-3">Your Notes</h1>
        <div className="row">
          {notes.map((note, index) => (
            <div key={note._id} className="col-lg-4 col-md-6 mb-3">
              <NoteItem note={note} updateNote={updateNote} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
