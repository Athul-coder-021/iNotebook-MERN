import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>
{
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

    const notesInitial =[
        {
            "_id": "65d41f5d230bf60a8304cb9b",
            "user": "65cdaa6ab9290a3556f265ba",
            "title": "My Coding Journey",
            "description": "Will tell you about y coding struggles and how to overcome it",
            "tag": "education",
            "createdAt": "2024-02-20T03:41:17.876Z",
            "updatedAt": "2024-02-20T03:41:17.876Z",
            "__v": 0
        },
        {
            "_id": "65d41f5d230bf60a8304cb9b",
            "user": "65cdaa6ab9290a3556f265ba",
            "title": "My Coding Journey",
            "description": "Will tell you about y coding struggles and how to overcome it",
            "tag": "education",
            "createdAt": "2024-02-20T03:41:17.876Z",
            "updatedAt": "2024-02-20T03:41:17.876Z",
            "__v": 0
        },
        {
            "_id": "65d41f5d230bf60a8304cb9b",
            "user": "65cdaa6ab9290a3556f265ba",
            "title": "My Coding Journey",
            "description": "Will tell you about y coding struggles and how to overcome it",
            "tag": "education",
            "createdAt": "2024-02-20T03:41:17.876Z",
            "updatedAt": "2024-02-20T03:41:17.876Z",
            "__v": 0
        },
        {
            "_id": "65d4b60c9f42cb4d1df270b8",
            "user": "65cdaa6ab9290a3556f265ba",
            "title": "My Devlopment Journey",
            "description": "Will tell the pathway of Devlopment road",
            "tag": "education",
            "createdAt": "2024-02-20T14:24:12.304Z",
            "updatedAt": "2024-02-20T14:31:44.304Z",
            "__v": 0
        }
    ]
    const [notes,setNotes]=useState(notesInitial)
    return(
        // <NoteContext.Provider value = {{state,update}}>
        //     {props.children}
        // </NoteContext.Provider>
        <NoteContext.Provider value = {{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
