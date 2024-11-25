import React from "react"
import NoteItem from "./NoteItem"

function Note({notes, onDeleteNote}) {
    return (
        <div className="w-80 h-lvh ">
            <ul>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} />
            ))}
        </ul>

        </div>
        
    )
}

export default Note
