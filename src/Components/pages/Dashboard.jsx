import { Outlet } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

import "./Dashboard.scss";

import AppBar from "../Header/AppBar";

import noteIcon from "../../assets/images/note.svg";
import menuReminderIcon from "../../assets/images/menuReminder.svg";
import menuEditIcon from "../../assets/images/menuEdit.svg";
import menuArchiveIcon from "../../assets/images/menuArchive.svg";
import menuTrashIcon from "../../assets/images/menuTrash.svg";

import NotesContainer from "../NoteCard/NoteContainer";
import zIndex from "@mui/material/styles/zIndex";

function Dashboard() {
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  return (
    <>
      <AppBar toggleDrawer={toggleDrawer} sx={{ zIndex: 2 }} />

      <div className="slide">
        <Drawer
          className="slider"
          open={drawerState}
          onClose={() => setDrawerState(false)}
          hideBackdrop
          sx={{ zIndex: -1 }}
        >
          <span className="slidename">
            <img className="slideimg" src={noteIcon} alt="bulb" />
            Notes
          </span>
          <br />
          <span className="slidename">
            <img className="slideimg" src={menuReminderIcon} alt="bulb" />
            Reminders
          </span>
          <br />
          <span className="slidename">
            <img className="slideimg" src={menuEditIcon} alt="bulb" />
            Edit labels
          </span>
          <br />
          <span className="slidename">
            <img className="slideimg" src={menuArchiveIcon} alt="bulb" />
            Archive
          </span>
          <br />
          <span className="slidename">
            <img className="slideimg" src={menuTrashIcon} alt="bulb" />
            Trash
          </span>
          <br />
        </Drawer>
      </div>

      
      <Outlet />
    </>
  );
}

export default Dashboard;
