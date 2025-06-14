// AppRouter.jsx or App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Welcome from "./Welcome";
import { ThemeProvider } from "./ThemeContext";


function AppRouter() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default AppRouter;
