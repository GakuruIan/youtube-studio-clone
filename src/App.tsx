import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Analytics from "./components/Analytics/Analytics";
import Content from "./Pages/Content/Content";
import Customization from "./Pages/Customization/Customization";
import Upload from "./Pages/Upload/Upload";
import Memberships from "./Pages/Memberships/Memberships";
import Linkings from "./Pages/Linkings/Linkings";

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
      },
      {
        path:'/customization',
        element:<Customization/>
      },
      {
        path:'/upload',
        element:<Upload/>
      },
      {
        path:'/memberships',
        element:<Memberships/>
      },
      {
        path:'/linkings',
        element:<Linkings/>
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
