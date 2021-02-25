import React, { useState } from 'react';
import './Note.css';

export default function Note(props) {
    let dates = props.date;
    return (
        <>
            {
                (props.notes) ? (props.notes).map((note, i) => {
                    return (
                        <div className="Note" key={i}>
                            <small className="cross" style={{ "fontSize": "9px", "float": "right" }} onClick={() => props.onDelete(note, dates[i])}>X</small>
                            {note}
                            <br />
                            <small style={{ "fontSize": "10px" }}>{dates[i]}</small>
                        </div>
                    )
                }) : null
            }
        </>
    );
}