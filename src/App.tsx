import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements  } from "react-router-dom";
import Layout from "./Layout";
import { About, Contact, Github, Home, User } from "./components";
import { GithubInfoLoader } from "./components/Github";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact />,
  //       },
  //     ],
  //   },
  // ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>

        <Route path="" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="user/:id" element={<User/>} />
        <Route 
          loader={GithubInfoLoader}           //whenever there is cursor on the github it loads the api data and saves it in cache
          path="github" element={<Github/>} />

      </Route>
    )
  )

  return <RouterProvider router={router} />;
}


export default App;
