import React from "react";

function NoteItem({ note, onDeleteNote }) {
  return (
    <div className="flex justify-between items-center">
      <li className="bg-[#60A5FA] text-white mt-6 rounded-md p-6 mr-6">
        {note.text}
        <span className="bg-[#374151] text-white mr-4  font-semibold ml-10 p-3 rounded-lg">
          <button onClick={() => onDeleteNote(note.id)}>Delete</button>
        </span>
      </li>
    </div>
  );
}
export default NoteItem;
