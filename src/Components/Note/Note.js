import React, { useState } from 'react';
import './Note.css';

export default function Note(props) {
    return (
        <>
            {
                (props.notes) ? (props.notes).map((note, i) => {
                    return (
                        <div className="Note" key={i}>
                            {note}
                        </div>
                    )
                }) : null
            }
        </>
    );
}