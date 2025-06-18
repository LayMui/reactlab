// AppRouter.jsx or App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Welcome from "./Welcome";

import { ThemeProvider } from "./ThemeContext";
import ManageState from "./ManageState";
import FetchData from "./FetchData";
import Increment from "./Increment";
import UpdateDay from "./updateDay";
import Reducer from "./Reducer";
import ContextProvider from "./ContextProvider";
import LiveOrder from "./LiveOrder";
import RadioGroup from "./RadioApp";
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
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/contextAPI" element={<ContextProvider />} />
          <Route path="/liveOrder" element={<LiveOrder />} />
          <Route path="/radioGroup" element={<RadioGroup />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default AppRouter;
