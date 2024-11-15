import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Fade } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PaletteIcon from "@mui/icons-material/Palette";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./NoteCard.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { archiveTrashApiCall } from "../../utils/Apis";

export default function NoteCard(props) {
  const { noteDetails, handleNotesList, container } = props;
  const [bgColor, setBgColor] = useState("white");

  const [anchorEl, setAnchorEl] = useState(null);
  const [openColorMenu, setOpenColorMenu] = useState(false);

  const open = Boolean(anchorEl);
  const openColor = openColorMenu;

  const handleColorMenuClick = () => {
    setOpenColorMenu(!openColorMenu);
  };
  const handleColorSelect = (color) => {
    setBgColor(color);
    setOpenColorMenu(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // add api here...  first check action
  const handleNoteIconClick = (action) => {
    let payload = {
      noteIdList: [noteDetails.id],
    };

    if (action === "archive") {
      payload.isArchived = true;
      archiveTrashApiCall("/notes/archiveNotes", payload);
    }
    if (action === "trash") {
      payload.isArchived = false;
      archiveTrashApiCall("/notes/trashNotes", payload);
    }

    // first check action then call api also add payload with
    // create method that  note.id
    // add access token in header
    handleNotesList(noteDetails, action);
  };

  return (
    <div className="card-wrapper-cnt">
      <div className="card-main-cnt" style={{ backgroundColor: bgColor }}>
        <div className="note-card-content">
          <h6>{noteDetails.title || "Untitled"}</h6>
          <p>{noteDetails.description || "No description"}</p>
        </div>

        {(container === "notes" || container === "archive") && (
          <div className="card-button-cnt">
            <IconButton aria-label="set reminder">
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton aria-label="add collaborator">
              <PersonAddIcon />
            </IconButton>

            <div className="color-menu">
              <IconButton
                aria-label="change color"
                onClick={handleColorMenuClick}
              >
                <PaletteIcon className="select-color" />
              </IconButton>
              {openColor && (
                <div className="color-row">
                  {[
                    "#ffeb3b",
                    "#ff5722",
                    "#4caf50",
                    "#03a9f4",
                    "#9c27b0",
                    "#e91e63",
                  ].map((color) => (
                    <div
                      key={color}
                      className="color-option"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorSelect(color)}
                    />
                  ))}
                </div>
              )}
            </div>

            <IconButton aria-label="add image">
              <ImageIcon />
            </IconButton>

            {container === "archive" ? (
              <IconButton
                aria-label="archive note"
                onClick={() => handleNoteIconClick("notes")}
              >
                <UnarchiveIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="archive note"
                onClick={() => handleNoteIconClick("archive")}
              >
                <ArchiveIcon />
              </IconButton>
            )}

            <IconButton aria-label="more options" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => handleNoteIconClick("delete")}>
                Delete note
              </MenuItem>
              <MenuItem onClick={handleClose}>Add label</MenuItem>
              <MenuItem onClick={handleClose}>Make a copy</MenuItem>
            </Menu>
          </div>
        )}

        {container === "delete" && (
          <div className="delete-container-btn">
            <div className="card-button-cnt">
              <div className="delete">
                <IconButton
                  aria-label="delete forever"
                  onClick={() => handleNoteIconClick("delete")}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </div>
              <div className="other-delete">
                <IconButton
                  aria-label="restore from trash"
                  onClick={() => handleNoteIconClick("notes")}
                >
                  <RestoreFromTrashIcon />
                </IconButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
