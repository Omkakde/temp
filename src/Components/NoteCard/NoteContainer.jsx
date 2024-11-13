import { useEffect, useState } from "react";
import { getAllNotesApiCall } from "../../utils/Apis";
import NoteCard from "./NoteCard.jsx";
import AddNote from "../AddNote/AddNoteCard.jsx";
import "./NoteContainer.scss";
function NotesContainer() {
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getAllNotesApiCall();
    console.log("Fetched notes from server:", res.data.data.data);
    if (res?.data?.data) {
      setNotesList(res.data.data.data);
    }

    //console.error("Error fetching notes:", error);
  };

  const handleNotesList = (data) => {
    console.log("New note added:", data);
    setNotesList((prevNotes) => [...prevNotes, data]);
  };

  return (
    <>
      <div className="note-container">
      <AddNote handleNotesList={handleNotesList} />

      {notesList.map((noteObj) => (
        <NoteCard key={noteObj.id} noteDetails={noteObj} />
      ))}
      </div>
    </>
  );
}

export default NotesContainer;
