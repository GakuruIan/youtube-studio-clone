import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Analytics from "./components/Analytics/Analytics";
import Content from "./Pages/Content/Content";

const router = createBrowserRouter([
   {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Analytics/>
      },
      {
        path:'/content',
        element:<Content/>
      }
    ]
   }
])

function App() {

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
