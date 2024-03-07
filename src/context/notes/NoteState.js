import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  // const s1={
  //     "name":"Athul jr",
  //     "class":"5c"
  // }

  // const [state,setState] = useState(s1);
  // const update = ()=>{
  //     setTimeout(()=>{
  //     setState({
  //         "name":"Athul sr",
  //         "class":"10c"
  //     })
  //     },1000)
  // }

  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get note
  const getNotes = async () => {
    //Todo API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZGFhNmFiOTI5MGEzNTU2ZjI2NWJhIn0sImlhdCI6MTcwODM5NzczMH0.b_rJW-X8CzjR-TDFceSzkIHU9afNsIsPfyUwqJfmSgQ",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //Todo API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZGFhNmFiOTI5MGEzNTU2ZjI2NWJhIn0sImlhdCI6MTcwODM5NzczMH0.b_rJW-X8CzjR-TDFceSzkIHU9afNsIsPfyUwqJfmSgQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = response.json();
    console.log(json);

    console.log("adding a new note");
    const note = {
      _id: "65d4b60c9f42cb4d1df270b8",
      user: "65cdaa6ab9290a3556f265ba",
      title: title,
      description: description,
      tag: "education",
      createdAt: "2024-02-20T14:24:12.304Z",
      updatedAt: "2024-02-20T14:31:44.304Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = async (id) => {
    //Todo API CALL
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZGFhNmFiOTI5MGEzNTU2ZjI2NWJhIn0sImlhdCI6MTcwODM5NzczMH0.b_rJW-X8CzjR-TDFceSzkIHU9afNsIsPfyUwqJfmSgQ",
      }
    });

    //logic
    console.log("deleting note with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };


  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZGFhNmFiOTI5MGEzNTU2ZjI2NWJhIn0sImlhdCI6MTcwODM5NzczMH0.b_rJW-X8CzjR-TDFceSzkIHU9afNsIsPfyUwqJfmSgQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    
    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    // <NoteContext.Provider value = {{state,update}}>
    //     {props.children}
    // </NoteContext.Provider>
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
