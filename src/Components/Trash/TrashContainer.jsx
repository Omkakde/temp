import React, { useEffect, useState } from "react";
import { getArchiveTrashNotesList } from "../../utils/Apis"; 
import "./TrashContainer.scss";
import NoteCard from "../NoteCard/NoteCard.jsx";

export default function TrashContainer() {
  const [trashList, setTrashList] = useState([]);

  useEffect(() => {
    fetchTrashNotes();
  }, []);

  const fetchTrashNotes = async () => {
    const res = await getArchiveTrashNotesList("/notes/getTrashNotesList");
    if (res?.data?.data) {
      setTrashList(res.data.data.data); 
    } else {
      console.error("No data found in response.");
    }
  };

  const handleTrashList = (data, action) => {
    
    if (action === "delete_forever") {
      let updatedList = trashList.filter((ele, index) => ele.id !== data.id);
      setTrashList(updatedList);
    }
    if (action === "recover") {
      let updatedList = trashList.filter((ele, index) => ele.id !== data.id);
      setTrashList(updatedList);
      
    }
    
  };

  return (
    <div className="main-container">
    <div className="note-container">
      {trashList.map((trashObj) => (
        <NoteCard
          key={trashObj.id}
          noteDetails={trashObj}
          handleNotesList={handleTrashList}
          container={"trash"}
        />
      ))}
    </div>
  </div>
  
  );
}
