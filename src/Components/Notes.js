import React from 'react'
import { useContext } from 'react';
import noteContext from './Context/notes/noteContext';
import NoteItem from './NoteItem';

function Notes() {
    const context = useContext(noteContext);
    const { notes } = context;
    return (
        <div>
            <div className="row my-4">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem note={note} key={note._id}/>
                })}
            </div>
        </div>
    )
}

export default Notes