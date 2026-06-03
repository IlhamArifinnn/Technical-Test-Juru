import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import CreateAttendance from "../pages/CreateAttendance";
import EditAttendance from "../pages/EditAttendance";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/create",
        element: <CreateAttendance />,
      },
      {
        path: "/edit/:id",
        element: <EditAttendance />,
      },
    ],
  },
]);
