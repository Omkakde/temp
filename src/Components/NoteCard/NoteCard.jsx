import React from "react";
import { IconButton, CardContent, CardActions } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PaletteIcon from "@mui/icons-material/Palette";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./NoteCard.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export default function NoteCard(props) {
  const { noteDetails, handleNotesList } = props;

  const handleNoteIconClick = (action) => {
    handleNotesList(noteDetails, action);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="card-wrapper-cnt">
      <div className="card-main-cnt">
        <div className="note-card-content">
          <h6>{noteDetails.title || "Untitled"}</h6>
          <p>{noteDetails.description || "No description"}</p>
        </div>

        <div className="card-button-cnt">
          <IconButton aria-label="set reminder">
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton aria-label="add collaborator">
            <PersonAddIcon />
          </IconButton>
          <IconButton aria-label="change color">
            <PaletteIcon />
          </IconButton>
          <IconButton aria-label="add image">
            <ImageIcon />
          </IconButton>
          <IconButton
            aria-label="archive note"
            onClick={() => handleNoteIconClick("archive")}
          >
            <ArchiveIcon />
          </IconButton>

          <IconButton aria-label="more options">
            <MoreVertIcon onClick={handleClick} />
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
      </div>
    </div>
  );
}
// on archive icon click send data to parent notecontainer
