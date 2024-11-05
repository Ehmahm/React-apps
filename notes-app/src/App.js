// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  // Handle adding a new note
  const addNote = () => {
    if (noteText.trim() === "") return;
    setNotes([...notes, { id: Date.now(), text: noteText }]);
    setNoteText("");
  };

  // Handle deleting a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <div className="note-input">
        <input
          type="text"
          placeholder="Write a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <span>{note.text}</span>
            <button onClick={() => deleteNote(note.id)}>&times;</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
