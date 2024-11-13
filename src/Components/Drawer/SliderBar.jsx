import React from 'react';
import { Drawer, MenuItem } from '@material-ui/core';
import "./Dashboard.scss";

function MiniDrawer({

}) {
  return (
    <>
      <div>
        <Drawer
          variant="persistent"
          overflow="auto"
          open={appBarProps}
          width={300}
        >
          <MenuItem id="noteMenu" onClick={handleNotes}>
            <img
              src={require("../assets/images/note.svg")}
              alt="note icon"
              style={{ marginRight: "50px" }}
            />
            Notes
          </MenuItem>
          <MenuItem id="reminderMenu" onClick={handleReminder}>
            <img
              src={require("../assets/images/menuReminder.svg")}
              alt="reminder icon"
              style={{ marginRight: "50px" }}
            />
            Reminders
          </MenuItem>
          <div
            style={{
              borderBottom: "1px solid lightgrey",
              borderTop: "1px solid lightgrey",
              overflow: "auto",
            }}
          >
            <div
              style={{
                padding: "3.5% 8%",
                fontSize: "12px",
                marginBottom: "15px",
                marginTop: "10px",
                fontFamily: "arial",
                color: "gray",
              }}
            >
              LABELS
            </div>
            <div>
              <div>{displayLabels}</div>
              <MenuItem id="labelMenu" onClick={handleEditLabel}>
                <img
                  src={require("../assets/images/menuEdit.svg")}
                  alt="edit icon"
                  style={{ marginRight: "50px" }}
                />
                Edit Labels
              </MenuItem>
            </div>
          </div>
          <MenuItem id="archiveMenu" onClick={handleArchived}>
            <img
              src={require("../assets/images/menuArchive.svg")}
              alt="archive icon"
              style={{ marginRight: "50px" }}
            />
            Archive
          </MenuItem>
          <MenuItem id="trashIcon" onClick={handleTrashed}>
            <img
              src={require("../assets/images/menuTrash.svg")}
              alt="trash icon"
              style={{ marginRight: "50px" }}
            />
            Trash
          </MenuItem>
        </Drawer>
       
      </div>
    </>
  );
}

export default MiniDrawer;
