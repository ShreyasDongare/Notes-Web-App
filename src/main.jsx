import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { NotesProvider } from "./context/Context";
import "./index.css";
import CreateNotes from "./pages/CreateNotes";
import EditNotes from "./pages/EditNotes";
import Notes from "./pages/Notes";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <NotesProvider>
        <App />
      </NotesProvider>
    ),
    children: [
      {
        path: "/",
        element: <Notes />,
      },
      {
        path: "/create-notes",
        element: <CreateNotes />,
      },
      {
        path: "/edit-notes/:id",
        element: <EditNotes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
