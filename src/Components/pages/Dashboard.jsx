// import { Outlet } from "react-router-dom";
// import { useState,useEffect } from "react";
// import { useDispatch } from "react-redux";
import AppBar from "../Header/AppBar";

// import Box from "@mui/material/Box";

// function Dashboard() {
//   const [isDrowerOpen, setisDrowerOpen] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     console.log("hii");
//   }, []);

//   return (
//     <>
//       <AppBar setisDrowerOpen={setisDrowerOpen} isDrowerOpen={isDrowerOpen} />
//       <Box sx={{ display: "flex" }} marginTop={10}>
//         <MiniDrawer isDrowerOpen={isDrowerOpen} />
//         <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
//           <Outlet />
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default Dashboard;

import { Outlet } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import "./Dashboard.scss";
import NotesContainer from "../NoteCard/NoteContainer";


function Dashboard() {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <>
      <AppBar />
      <h1>DashboardContainer</h1>
      <h2 onClick={() => setDrawerState(!drawerState)}>Header</h2>
      <NotesContainer/>
      <Drawer open={drawerState} onClose={() => setDrawerState(false)}>
        <div className="Drawer-list">
          <span>Notes</span>
          <span>Reminder</span>
          <span>Edit labels</span>
          <span>Archive</span>
          <span>Trash</span>
        </div>
      </Drawer>
      <Outlet />
    </>
  );
}

export default Dashboard;
