// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer"; // استيراد الفوتر
import AddProperty from "./Pages/AddPropertyForm";
import UpdateProperty from "./pages/UpdatePropertyForm";
import { PropertiesProvider } from "./Contexts/PropertiesContext";
import PropertyDetails from "./pages/PropertyDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";

const ErrorPage = () => (
  <div>
    <h2>Oops! Page Not Found 😕</h2>
    <p>The page you are looking for does not exist. Check the link or return to the home page.</p>
  </div>
);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header /> {/* عرض الهيدر */}
          <Footer /> {/* عرض الفوتر */}
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/addProperty", element: <AddProperty /> },
        { path: "/updateProperty", element: <UpdateProperty /> },
        { path: "/propertyDetails/:id", element: <PropertyDetails /> },
        { path: "/signIn", element: <SignIn /> },
        { path: "/signUp", element: <SignUp /> },
        { path: "/signOut", element: <SignOut /> },
      ],
    },
  ]);

  return (
    <PropertiesProvider>
      <RouterProvider router={router} />
    </PropertiesProvider>
  );
};

export default App;
