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

  const handleNotesList = (data, action) => {
    /// if action present then add, delte, remove
    if(action==="add"){
      console.log("New note added:", data);
      setNotesList([...notesList, data]); // this only add one data
    }
    if (action==="archive") {
      let array = notesList.filter((ele, index) => ele.id !== data.id);
      setNotesList(array);
    }
    if (action==="delete") {
      let array = notesList.filter((ele, index) => ele.id !== data.id);
      setNotesList(array);
    }
    // setNotesList ([...notesList, data]);// same data line 25
  };
  //callback syntax use for to use for update also next state

  // const handleRemove = (parameter1)=>{

  //    let array = notesList.filter((ele,index)=>
  //         ele.id!==parameter1.id
  //    )
  //    setNotesList(array);
  // }

  return (
    <div className="main-contaier">
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
