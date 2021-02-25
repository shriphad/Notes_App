import React, { useState } from 'react';
import Note from './../Note/Note';
import './Notes.css';

export default function Notes() {
    const [text, changeText] = useState("");
    const [notes, addNotes] = useState([]);
    const [dates, setDates] = useState([]);
    const [date, setDate] = useState("");
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    const addNote = () => {
        if (text && date) {
            setError("");
            addNotes([...notes, text]);
            setDates([...dates, date])
            changeText("");
            setDate("");
        }
        else {
            setError("Note cannot be empty!, note and date is compulsory");
        }
    }

    const onDelete = (node, datess) => {
        let newNotes = notes.filter(function (note) {
            return note != node;
        });
        let newDates = dates.filter(function (note) {
            return note != datess;
        });
        addNotes(newNotes);
        setDates(newDates);
    }

    const onEdit = (node, newNode) => {
        let newNotes = notes.filter(function (x) {
            if (x === node) {
                return newNode;
            }
            else {
                return node;
            }
        });
        addNotes(newNotes);
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
                <label htmlFor="start">date:</label>
                <input type="date" id="start" name="date" className="noteSearch"
                    value={date} onChange={e => setDate(e.target.value)}
                    style={{ "maxWidth": "180px", "margin": "0.6rem" }} />
                <br />
                <button className="add-button" onClick={() => addNote()}>Add</button>
            </div>



            <div className="content">
                {/* <input className="noteSearch" type="search" placeholder="Search..." onChange={e => setSearch(e.target.value)} /> */}
                <Note notes={notes} date={dates} onDelete={onDelete} onEdit={onEdit} />
            </div>
        </>
    );
}