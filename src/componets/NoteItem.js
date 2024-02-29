import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import noteContext from "../context/notes/noteContext";
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote}= context;
  const { note } = props;
  return (
    <div className="col md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <a href="#" className="btn btn-primary">
            See Notes
          </a>
            <FontAwesomeIcon icon={faTrash} 
            style={{ position: "absolute", right: 10, bottom: 10 ,cursor: "pointer"}} onClick={()=>{deleteNote(note._id)}}/>
            <FontAwesomeIcon icon={faPenSquare} style={{ position: "absolute", right: 40, bottom: 10 ,cursor: "pointer"}} /> 
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
