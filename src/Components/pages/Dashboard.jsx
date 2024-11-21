import { Outlet, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

import "./Dashboard.scss";

import AppBar from "../Header/AppBar";

import noteIcon from "../../assets/images/note.svg";
import menuReminderIcon from "../../assets/images/menuReminder.svg";
import menuEditIcon from "../../assets/images/menuEdit.svg";
import menuArchiveIcon from "../../assets/images/menuArchive.svg";
import menuTrashIcon from "../../assets/images/menuTrash.svg";

function Dashboard() {
  const [drawerState, setDrawerState] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  const handleNavigation = (route) => {
    navigate(route);
    setDrawerState(false); // Close the drawer after navigation
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
          sx={{ zIndex: 1 }}
        >
          <div className="slidename" onClick={() => handleNavigation("/notes")}>
            <img className="slideimg" src={noteIcon} alt="Notes" />
            <span>Notes</span>
          </div>
          <div
            className="slidename"
            onClick={() => handleNavigation("/reminders")}
          >
            <img className="slideimg" src={menuReminderIcon} alt="Reminders" />
            <span>Reminders</span>
          </div>
          <div
            className="slidename"
            onClick={() => handleNavigation("/edit-labels")}
          >
            <img className="slideimg" src={menuEditIcon} alt="Edit labels" />
            <span>Edit labels</span>
          </div>
          <div
            className="slidename"
            onClick={() => handleNavigation("/archive")}
          >
            <img className="slideimg" src={menuArchiveIcon} alt="Archive" />
            <span>Archive</span>
          </div>
          <div className="slidename" onClick={() => handleNavigation("/trash")}>
            <img className="slideimg" src={menuTrashIcon} alt="Trash" />
            <span>Trash</span>
          </div>
        </Drawer>
      </div>

      <Outlet />
    </>
  );
}

export default Dashboard;
