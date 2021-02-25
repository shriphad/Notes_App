import React, { useState } from 'react';
import Note from './../Note/Note';
import './Notes.css';

export default function Notes() {
    const [text, changeText] = useState("");
    const [notes, addNotes] = useState([]);
    const [error, setError] = useState("");

    const addNote = () => {
        if (text) {
            setError("");
            addNotes([...notes, text]);
            changeText("");
        }
        else {
            setError("Note cannot be empty!");
        }
    }


    return (
        <>
            <div className="editor">
                {
                    error ? <>
                        <small style={{ 'color': 'red', 'fontSize': '13px' }}>{error}</small>
                    </> : null
                }
                <textarea
                    className="textarea"
                    placeholder="Enter your note here..."
                    rows={5}
                    value={text}
                    onChange={e => changeText(e.target.value)}>
                </textarea>
                <button className="add-button" onClick={() => addNote()}>Add</button>
            </div>
            <div className="content">
                <Note notes={notes} />
            </div>
        </>
    );
}