import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/login/login";
import Signup from "./Components/signUp/signUp";
import NodeCard from "./Components/NoteCard/NoteCard";
import AddNoteCard from "./Components/AddNote/AddNoteCard";
import SliderBar from "./Components/Drawer/SliderBar.jsx";

import AppBar from "./Components/Header/AppBar";
import Dashboard from "./Components/pages/Dashboard";
import NotesContainer from "./Components/NoteCard/NoteContainer";
import TrashContainer from "./Components/Trash/TrashContainer.jsx";
import ArchiveContainer from "./Components/archive/ArchiveContainer.jsx";



function RoutingModule() {
  const AppRoutes = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup/>,
    },
    
   
    {
      path: "/login",
      element: <Login/>,
    },
   
    

    {
      path: "/",
       element: <Dashboard/>
      ,children: [
        {
          path: "/notes",
          element: <NotesContainer/>,
        },
        {
          path: "/archive",
          element: <ArchiveContainer/>,
        },
        {
          path: "/trash",
          element: <TrashContainer/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={AppRoutes} />;
}

export default RoutingModule;
