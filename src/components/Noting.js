import React, {useEffect, useState } from "react";

function Noting({ onAddNote }) {
  const [noteText, setNoteText] = useState(""); // State for the note input
  const [message, setMessage] = useState(""); // To store the success message


  // Handle the form submission
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default form submission (page refresh)
    
    // Only add the note if it's not empty (ignoring spaces)
    if (noteText.trim()) {
      onAddNote({ id: Date.now(), text: noteText }); // Pass new note to the parent
      setNoteText(""); // Clear the input field after submission
      setMessage("Submit Successful!"); // Set success message
    }
  };

  // Automatically clear the message after 2 seconds whenever it changes
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(""); // Clear the message after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or re-renders
    }
  }, [message]); // Only runs when `message` changes

  return (
    <div className="w-100 h-100">

    {message && (
        <p className="mt-4 text-white font-semibold">{message}</p>
      )}
      {/* The form that handles submission */}
      <form onSubmit={handleClick}>
        <textarea
          value={noteText} // Bind input to state
          onChange={(e) => setNoteText(e.target.value)} // Update state on input change
          className="w-80 h-64  bg-[#374151] text-[#D1D5DB] border-[#4B5563] focus:border-[#60A5FA] placeholder-[#6B7280] rounded-lg p-3  text-lg font-semibold border-none"
          placeholder="Enter your note..."
        />
        {/* Submit button inside the form */}
        <button
          type="submit"
          className="bg-[#60A5FA] text-white h-10 w-32 rounded-lg font-semibold mt-8 ml-8"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default Noting;
