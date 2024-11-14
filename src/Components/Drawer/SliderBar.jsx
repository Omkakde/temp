// import React, { useState } from "react";
// import { Drawer, IconButton } from "@mui/material";
// import "./SliderBar.scss"; 

// import noteIcon from "../../assets/images/note.svg";
// import menuReminderIcon from "../../assets/images/menuReminder.svg";
// import menuEditIcon from "../../assets/images/menuEdit.svg";
// import menuArchiveIcon from "../../assets/images/menuArchive.svg";
// import menuTrashIcon from "../../assets/images/menuTrash.svg";

// function Sidebar() {
//   const [drawerState, setDrawerState] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerState(!drawerState);
//   };

//   return (
//     <>
      
     

//       <h1>DashboardContainer</h1>

//       <div className="slide">
       
//         <Drawer 
//           className="slider" 
//           open={drawerState} 
//           onClose={() => setDrawerState(true)}  
//           hideBackdrop
//         >
         
//           <span className="slidename"><img className="slideimg" src={noteIcon} alt="bulb" />Notes</span><br />
//           <span className="slidename"><img className="slideimg" src={menuReminderIcon} alt="bulb" />Reminders</span><br />
//           <span className="slidename"><img className="slideimg" src={menuEditIcon} alt="bulb" />Edit labels</span><br />
//           <span className="slidename"><img className="slideimg" src={menuArchiveIcon} alt="bulb" />Archive</span><br />
//           <span className="slidename"><img className="slideimg" src={menuTrashIcon} alt="bulb" />Trash</span><br />
//         </Drawer>
//       </div>

//       <AddNoteCard />
     
//     </>
//   );
// }

// export default Sidebar;
