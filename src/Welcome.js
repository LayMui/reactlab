import "./Switch.css";
import Switch from "./Switch";
import { ThemeProvider, useTheme } from "./ThemeContext";

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
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
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
