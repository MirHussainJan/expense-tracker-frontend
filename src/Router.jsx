import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Group from './pages/Group'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create-group",
      element: <Group/>,
    }

  ]);
  