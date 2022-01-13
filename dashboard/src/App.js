import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";

import Dashboard from "./pages/dashboard/Dashboard";
import "./app.css"

function App() {
  return (
    <div>
      <Topbar/> 
      <div className="container">
        <SideBar/>
        <Dashboard/>
        {/* <div className="mainbody">Main Body</div> */}
      </div>
    </div>
  );
}

export default App;
