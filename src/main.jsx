import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Error from "./Components/Error handle/Error.jsx";
import Body from "./Components/Body.jsx";
import Menu from "./Components/Pages/Menu.jsx";
// import Grocery from "./Components/Pages/Grocery.jsx";
import { lazy, Suspense } from "react";
import Cart from "./Components/Pages/Cart.jsx";

const Grocery = lazy(() => import("./Components/Pages/Grocery.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/restaurant/:id",
        element: <Menu />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>please wait....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
