import { useEffect, useState } from "react";
import { getAllNotesApiCall } from "../../utils/Apis";
import NoteCard from "./NoteCard.jsx";
import AddNote from "../AddNote/AddNoteCard.jsx";
import "./NoteContainer.scss";

function NotesContainer() {
  const [notesList, setNotesList] = useState([]);

  // Fetch data on initial render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getAllNotesApiCall();
    if (res?.data?.data) {
      setNotesList(res.data.data.data);
    }
  };

  const handleNotesList = (data, action) => {
    if (action === "add") {
      setNotesList((prev) => [...prev, data]);
    } else if (action === "archive" || action === "trash") {
      setNotesList((prev) => prev.filter((note) => note.id !== data.id));
    } else if (action === "edit" || action === "color") {
      const updatedList = notesList.map((note) => {
        if (note.id === data.id) {
          return data;
        }
        return note;
      });
      console.log(updatedList);
      setNotesList(updatedList);
    } else {
      console.error("Unknown action:", action);
    }
  };
  

  return (
    <div className="main-container">
      <AddNote handleNotesList={handleNotesList} />
      <div className="note-container">
        {notesList.map((noteObj) => (
          <NoteCard
            key={noteObj.id}
            noteDetails={noteObj}
            handleNotesList={handleNotesList}
            container={"notes"}
          />
        ))}
      </div>
    </div>
  );
}

export default NotesContainer;
