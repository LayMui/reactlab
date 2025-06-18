import "./Switch.css";
import Switch from "./Switch";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { useNavigate } from "react-router-dom";

const Title = ({ children }) => {
  const { theme } = useTheme();

  return (
    <h2
      style={{ color: theme === "light" ? "black" : "white" }}>
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();

  return (
    <p
      style={{ color: theme === "light" ? "black" : "white" }}>
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and
        searched and searched for the perfect pizza dough recipe.
        I tried dozens, or more. And while some were good, none
        of them were that recipe that would make me stop trying
        all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header
      style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "1rem",
        padding: "1rem",
        background: "#f5f5f5",
      }}>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  const navigate = useNavigate();
  return (
    <div className="Page">
       <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Title>When it comes to dough</Title>
      <button style={{width: "150px"}} onClick={() => navigate('/state')}>Go to State</button>
      <button style={{width: "150px"}} onClick={() => navigate('/fetchData')}>Fetch Data</button>
      <button style={{width: "150px"}} onClick={() => navigate('/increment')}>Custom Hook: Increment</button>
      <button style={{width: "150px"}} onClick={() => navigate('/updateDay')}>Custom Hook: Update Day</button>
      <button style={{width: "150px"}} onClick={() => navigate('/reducer')}>useReducer Hook</button>
      </div>
      <Content />
    </div>
  );
};

function AppContent() {
  // This is the App that actually displays content
  const { theme } = useTheme();

  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
      <Header />
      <Page />
    </div>
  );
}

function Welcome() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default Welcome;
