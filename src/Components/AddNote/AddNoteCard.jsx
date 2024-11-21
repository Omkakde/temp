import "./AddNoteCard.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BrushIcon from "@mui/icons-material/Brush";
import ImageIcon from "@mui/icons-material/Image";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PaletteIcon from "@mui/icons-material/Palette";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import React, { useState } from "react";
import { addNoteApi, updateNotesApiCall } from "../../utils/Apis";

const AddNoteCard = ({ mode = "add", noteDetails, handleNotesList }) => {
  const [isExpanded, setIsExpanded] = useState(mode === "add" ? false : true);
  const [title, setTitle] = useState(mode === "add" ? "" : noteDetails.title);
  const [description, setDescription] = useState(
    mode === "add" ? "" : noteDetails.description
  );
  const [color, setColor] = useState("white");
  const [openColor, setOpenColorMenu] = useState(false); // Track if the color menu is open

  const handleInputClick = () => {
    setIsExpanded(!isExpanded);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setColor("#ffffff");

    if (mode === "add") {
      handleAddNote();
    } else if (mode === "edit") {
      const payload = {
        noteId: noteDetails.id,
        title: title,
        description: description,
        color: color,
      };

      updateNotesApiCall(payload)
        .then((data) => {
          console.log("Updated note data:", data);

          handleNotesList(
            { ...noteDetails, title, description, color },
            "edit"
          );
        })
        .catch((error) => {
          console.error("Error updating note:", error);
        });
    }

    // Reset fields
    setColor("");
    setTitle("");
    setDescription("");
  };

  const handleAddNote = async () => {
    if (title && description) {
      const payload = { title, description, color };

      const response = await addNoteApi(payload);
      if (response) {
        handleNotesList(
          {
            id: response.id,
            title: title,
            description: description,
            quantity: response.quantity,
          },
          "add"
        );
        // add response data not static data
        console.log("Note added successfully:", response);
      } else {
        console.log("Title and description are required.");
      }
    }
  };

  const handleColorSelect = (color) => {
    console.log(" changing", color);
    setColor(color);
    setOpenColorMenu(false); // Close the color menu after selection
  };

  const handleColorMenuClick = () => {
    setOpenColorMenu(!openColor); // Toggle the color menu visibility
  };

  return (
    <div>
      {!isExpanded ? (
        <div className="collapsed-note" onClick={handleInputClick}>
          <input
            type="text"
            placeholder="Take a note..."
            className="collapsed-input"
            value=""
            readOnly
          />
          <div className="collapsed-icons">
            <CheckBoxIcon className="icon" />
            <BrushIcon className="icon" />
            <ImageIcon className="icon" />
          </div>
        </div>
      ) : (
        <div className="expanded-note" style={{ backgroundColor: color }}>
          <input
            type="text"
            placeholder="Title"
            className="note-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Take a note..."
            className="note-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="note-footer">
            <div className="icons">
              <NotificationsNoneIcon className="icon" />
              <PersonAddIcon className="icon" />
              <PaletteIcon className="icon" onClick={handleColorMenuClick} />
              <ImageIcon className="icon" />
              <ArchiveIcon className="icon" />
              <MoreVertIcon className="icon" />
              <UndoIcon className="icon" />
              <RedoIcon className="icon" />
            </div>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </div>

          {openColor && (
            <div className="color-menu">
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddNoteCard;
