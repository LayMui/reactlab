import "./Switch.css";
import Switch from "./Switch";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { useNavigate } from "react-router-dom";

// Title component with support for external style
const Title = ({ children, style = {} }) => {
  const { theme } = useTheme();

  return (
    <h2 style={{ color: theme === "light" ? "black" : "white", ...style }}>
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();

  return (
    <p style={{ color: theme === "light" ? "black" : "white" }}>
      {children}
    </p>
  );
};

const Content = () => (
  <div>
    <Paragraph>
      We are a pizza-loving family. And for years, I searched and searched and
      searched for the perfect pizza dough recipe. I tried dozens, or more. And
      while some were good, none of them were that recipe that would make me
      stop trying all of the others.
    </Paragraph>
  </div>
);

const Header = () => (
  <header
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "1rem",
      background: "#f5f5f5",
    }}
  >
    <Title>Little Lemon 🍕</Title>
    <Switch />
  </header>
);

const Page = () => {
  const navigate = useNavigate();

  const navButtons = [
    { path: "/state", label: "Go to State" },
    { path: "/fetchData", label: "Fetch Data" },
    { path: "/increment", label: "Custom Hook: Increment" },
    { path: "/updateDay", label: "Custom Hook: Update Day" },
    { path: "/reducer", label: "useReducer Hook" },
    { path: "/contextAPI", label: "contextAPI" },
    { path: "/liveOrder", label: "liveOrder" },
    { path: "/radioGroup", label: "radioGroup" },
    { path: "/forwardRef", label: "ForwardRef API" },
    { path: "/cursorTracker", label: "Cursor Tracker" },
  ];

  return (
    <div className="Page" style={{ padding: "1rem" }}>
      <div
        className="button-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          justifyItems: "center",
          marginBottom: "2rem",
        }}
      >
        {navButtons.map(({ path, label }) => (
          <button
            key={path}
            className="nav-button"
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </div>
      <Title style={{ gridColumn: "1 / -1" }}>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "light" ? "white" : "black" }}
    >
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
