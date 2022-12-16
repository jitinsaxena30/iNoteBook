import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

  const notesInitial = [
    {
      "_id": "6369415878c4db55a57de22f",
      "user": "6369414078c4db55a57de22d",
      "title": "Jc king ka note",
      "description": "this is note of king",
      "tag": "personal",
      "date": "2022-11-07T17:33:12.606Z",
      "__v": 0
    },
    {
      "_id": "6369416878c4db55a57de231",
      "user": "6369414078c4db55a57de22d",
      "title": "asharma ka note",
      "description": "this is note of king",
      "tag": "personal",
      "date": "2022-11-07T17:33:28.768Z",
      "__v": 0
    },
    {
      "_id": "6369419378c4db55a57de233",
      "user": "6369414078c4db55a57de22d",
      "title": "asharma ka note",
      "description": "mana rapper wali vibe ni hai",
      "tag": "versatile",
      "date": "2022-11-07T17:34:11.905Z",
      "__v": 0
    },
    {
      "_id": "636941f278c4db55a57de235",
      "user": "6369414078c4db55a57de22d",
      "title": "asharma ka dusra note",
      "description": "mana rapper wali vibe ni hai par aisa ni hai ki versatile ni hai",
      "tag": "versatile 2",
      "date": "2022-11-07T17:35:46.263Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial)

    //Add a note
    const addNote = (title,description,tag)=>{
      //todo api call
      note=null;
      setNotes(notes.push(note))
    }

    //Edit a note
    const editNote = (id)=>{
      
    }


    //Delete a note
    const deleteNote = (id)=>{
      
    } 


  return (
    <NoteContext.Provider value={{ notes,addNote,editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState;