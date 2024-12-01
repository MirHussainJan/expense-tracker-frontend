import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Group from './pages/Group';
import CreateGroup from './pages/CreateGroup';
import GroupDetails from './pages/GroupDetails';
import App from './App';  // Ensure this imports App component to wrap the routes
import ApprovalPage from './pages/ApprovalPage';
import Login from './components/Login';
import Profile from './pages/Profile';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Home />, 
      },
      {
        path: "/groups",
        element: <Group />,  
      },
      {
        path: "/create-group",
        element: <CreateGroup />, 
      },
      {
        path: "/group-details",
        element: <GroupDetails />, 
      },
      {
        path: "/register",
        element: <Login/>, 
      },
      {
        path: "/approvals",
        element: <ApprovalPage/>, 
      },
      {
        path: "/profile",
        element: <Profile/>, 
      }
    ]
  }
]);
