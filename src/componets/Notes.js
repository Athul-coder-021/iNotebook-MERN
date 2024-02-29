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

import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes} = context;

  return (
    <>
      <AddNote />
      <div className="container mt-3">
        <h1 className="mb-3">Your Notes</h1>
        <div className="row">
          {notes.map((note, index) => (
            <div key={note._id} className="col-lg-4 col-md-6 mb-3">
              <NoteItem note={note} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
