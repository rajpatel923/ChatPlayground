
import NavBar from "@/components/NavBar"
import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 h-[100vh] w-screen">
        <div className="col-span-2">
            <NavBar/>
        </div>
        <div className="col-span-10 relative">
          <div className="border-l border-gray-400 h-full absolute left-0"></div>
          <Outlet/>
        </div>
    </div>
  )
}

export default HomePage