import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:8000"
    const notesInitials = []

    const [notes, setNotes] = useState(notesInitials);


    //Get all Note //Api call
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }


    //Adding a Note
    const addNote = async (title, description, tag) => {
        //Api call
        const response = await fetch(`${host}/api/notes/addNote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },

            body: JSON.stringify({ title, description, tag })

        });
        const note = await response.json();
        setNotes(notes.concat(note))

    }

    //delete a Note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = response.json();
        console.log(json)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    //edit a Note
    const editNote = async (id, title, description, tag) => {
        //Api call
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },

            body: JSON.stringify({ id, title, description, tag })// body data type must match "Content-Type" header
        });
        const json = response.json();
        console.log(json)



        let newNote = JSON.parse(JSON.stringify(notes))
        //Logic
        for (let index = 0; index < newNote.length; index++) {
            const element = newNote[index];
            if (element._id === id) {
                newNote[index].title = title;
                newNote[index].description = description;
                newNote[index].tag = tag;
                break;
            }
        }
        setNotes(newNote)
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState