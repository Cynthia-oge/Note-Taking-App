import Noting from "./components/Noting";
import Note from "./components/Note";
import Header from "./components/Header";
import { useState } from "react";
export default function App() {

  const [notes, setNotes] = useState([]);

  // add a new note
  const addNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes,]);
  }

  // Delete a note
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };


  return (
    <div className="bg-[#1E293B] h-screen">
      <Header />
      <div className="sm:flex justify-around mt-10">
        <Noting  onAddNote={addNote} />
        <Note notes={notes} onDeleteNote={deleteNote}/>
      </div>
    </div>
  );
}
