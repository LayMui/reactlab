// AppRouter.jsx or App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Welcome from "./Welcome";

import { ThemeProvider } from "./ThemeContext";
import ManageState from "./ManageState";
import FetchData from "./FetchData";
import Increment from "./Increment";
import UpdateDay from "./UpdateDay";
function AppRouter() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/state" element={<ManageState />} />  
          <Route path="/fetchData" element={<FetchData />} />
          <Route path="/increment" element={<Increment />} />
          <Route path="/updateDay" element={<UpdateDay />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default AppRouter;
