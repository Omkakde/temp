

import React, { useEffect, useState } from "react";
import { getArchiveTrashNotesList } from "../../utils/Apis"; 
import "./ArchiveContainer.scss";
import NoteCard from "../NoteCard/NoteCard.jsx";


export default function ArchiveContainer() {
  const [archiveList, setArchiveList] = useState([]);

  useEffect(() => {
    fetchArchiveNotes();
  }, []);

  const fetchArchiveNotes = async () => {
    const res = await getArchiveTrashNotesList("/notes/getArchiveNotesList");
    if (res?.data?.data) {
      setArchiveList(res.data.data.data); 
    } else {
      console.error("No data found in response.");
    }
  };

  const handleArchiveList = (data, action) => {
    if (action === "unArchive") {
      let updatedList = archiveList.filter((ele, index) => ele.id !== data.id);
      setArchiveList(updatedList);
    }
    if (action === "archive") {
      let updatedList = archiveList.filter((ele, index) => ele.id !== data.id);
      setArchiveList(updatedList);
    }
    if (action === "trash") {
      let updatedList = archiveList.filter((ele, index) => ele.id !== data.id);
      setArchiveList(updatedList);
    }
  };

  return (
    <div className="main-container">
    <div className="note-container">
      {archiveList.map((archiveObj) => (
        <NoteCard
          key={archiveObj.id}
          noteDetails={archiveObj}
          handleNotesList={handleArchiveList}
          container={"archive"}
        />
      ))}
    </div>
  </div>
  
  );
}



