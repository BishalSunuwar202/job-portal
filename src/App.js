import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AuthenticationPage, {
  action as signupAction,
} from "./pages/Authentication";
import LoginPage, { action as loginAction } from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
//import ProfileRootLayout from "./pages/ProfileRootLayout";
import CompanyDetailPage from "./pages/CompanyDetailPage";
import SavedJobsPage from "./pages/SavedJobsPage";
import ProfileFormPage, {
  action as newProfileAction,
  loader as profileDetailLoader,
} from "./pages/ProfileFormPage";

import SearchPage from "./pages/Search";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "./store/user-slice";

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
        action: signupAction,
      },
      {
        path: "auth/login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "employer/:id",
        element: <CompanyDetailPage />,
      },
      {
        path: "employer/:id/favourite",
        element: <SavedJobsPage />,
      },
      { path: "search", element: <SearchPage /> },

      //{element: <PrivateRoute/> },
      {
        path: "profile",
        // element: <ProfileRootLayout />,
        children: [
          {
            index: true,
            element: <ProfilePage />,
          },
          {
            path: "profileDetails",
            element: <ProfileFormPage />,
            loader: profileDetailLoader,
            action: newProfileAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      fetch("http://localhost:3001/api/userList", {
        credentials: "include",
      })
        .then(async (res) => {
         // console.log(await res.json());
          dispatch(userAction.login());
          //dispatch(userAction.setUser(JSON.stringify(res)));
          dispatch(userAction.setUser(await res.json()));
          setLoading(true);
        })
        .catch((error) => {
          console.error(error)
          dispatch(userAction.logout());
          setLoading(true);
        });
    } else {
      setLoading(true);
    }
    
  }, []);
  if (!loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <button type="button" className="bg-indigo-500 ..." disabled>
            <svg
              className="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            Loading...
          </button>
        </div>
      </>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;

//.json() is used to extract and parse the JSON payload from the response body.
//JSON.stringify() is a method in JavaScript used to convert JavaScript objects into JSON strings.
