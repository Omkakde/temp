import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/login/login";
import Signup from "./Components/signUp/signUp";
import NodeCard from "./Components/NoteCard/NoteCard";
import AddNoteCard from "./Components/AddNote/AddNoteCard";

import AppBar from "./Components/Header/AppBar";
import Dashboard from "./Components/pages/Dashboard";
import NotesContainer from "./Components/NoteCard/NoteContainer";

function RoutingModule() {
  const AppRoutes = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/noteCard",
      element: <NodeCard />,
    },
    {
      path: "/noteContainer",
      element: <NotesContainer />,
    },
    {
      path: "/addNote",
      element: <AddNoteCard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    

    {
      path: "/",
       element: <Dashboard />
      ,children: [
        {
          path: "/header",
          element: <AppBar />,
        }
        // {
        //   path: "/archive",
        //   element: <ArchiveContainer />,
        // },
        // {
        //   path: "/trash",
        //   element: <TrashContainer />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={AppRoutes} />;
}

export default RoutingModule;
