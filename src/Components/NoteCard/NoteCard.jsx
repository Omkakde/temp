import React from 'react';
import { IconButton, CardContent, CardActions } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PaletteIcon from '@mui/icons-material/Palette';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./NoteCard.css";

export default function NoteCard(props) {
  const { noteDetails } = props;


  return (
      <div className="card-wrapper-cnt">
      <div className="card-main-cnt">
        <div className="note-card-content">
          <h6>{noteDetails.title || 'Untitled'}</h6>
          <p>{noteDetails.description || 'No description'}</p>
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
          <IconButton aria-label="archive note">
            <ArchiveIcon />
          </IconButton>
          <IconButton aria-label="more options">
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    
    </div>
  );
}
