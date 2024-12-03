import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Work from "./Components/Work/Work";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Experience from "./Components/Experience/Experience";
import Notfound from './Components/Notfound/Notfound';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: "true", element: <Home />},
        { path: "home", element: <Home />},
        { path: "about", element: <About /> },
        { path: "work", element: <Work /> },
        { path: "skills", element: <Skills /> },
        { path: "experience", element: <Experience /> },
        {path:"*",element:<Notfound/>}
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
