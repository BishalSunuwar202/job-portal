import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AuthenticationPage from "./pages/Authentication";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileRootLayout from "./pages/ProfileRootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "auth/signup",
        element: <AuthenticationPage />,
      },
      {
        path: "auth/login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: <ProfileRootLayout />,
        children: [
          {
            index: true,
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
