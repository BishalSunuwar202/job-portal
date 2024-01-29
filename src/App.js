import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AuthenticationPage from "./pages/Authentication";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileRootLayout from "./pages/ProfileRootLayout";
import CompanyDetailPage from "./pages/CompanyDetailPage";
import SavedJobsPage from "./pages/SavedJobsPage";
import ProfileFormPage from "./pages/ProfileFormPage";

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
        path: "employer/:id",
        element: <CompanyDetailPage />,
      },
      {
        path: "employer/:id/favourite",
        element: <SavedJobsPage />,
      },
      {
        path: "profile",
        element: <ProfileRootLayout />,
        children: [
          {
            index: true,
            element: <ProfilePage />,
          },
          {
            path: "profileDetails",
            element: <ProfileFormPage />,
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
