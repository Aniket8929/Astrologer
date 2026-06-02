import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { AuthProvider } from "./context/Authcontext";
import AstrologerProfile from "./components/AstrologerProfile";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/experts/:id",
    element: <AstrologerProfile />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);