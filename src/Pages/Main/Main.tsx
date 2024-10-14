
// components
import Sidebar from "../../components/Sidebar/Sidebar.tsx"

import { Outlet } from "react-router-dom"
import Topbar from "../../components/Topbar/Topbar.tsx"
const Main = () => {
  return (
    <div className="flex w-full relative">
       <Sidebar/>

       <div className="ml-16 w-full mx-1">
              <Topbar/>
          <div className="mt-20">
             <Outlet/>
          </div>

          
       </div>
    </div>
  )
}

export default Main