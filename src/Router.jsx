import { createBrowserRouter } from "react-router-dom";
import CreateGroup from './pages/CreateGroup'
import Group from "./pages/Group";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Group />,
    },
    {
      path: "/create-group",
      element: <CreateGroup/>,
    }

  ]);
  