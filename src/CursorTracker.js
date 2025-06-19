import { useState, useEffect } from 'react';
import './CursorTracker.css';

// Custom hook
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return mousePosition;
};

// Render Props component
const MousePosition = ({ render }) => {
  const mousePosition = useMousePosition();
  return render(mousePosition);
};

// HOC version
const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const mousePosition = useMousePosition();
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

// DataFetcher using Render Props
const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice-cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, [url]);

  return render(data);
};

const DessertCount = () => (
  <DataFetcher
    url="https://littlelemon/desserts"
    render={(data) => <p className="data-box">{data.length} desserts</p>}
  />
);

const DrinksCount = () => (
  <DataFetcher
    url="https://littlelemon/drinks"
    render={(data) => <h3 className="data-box">{data.length} drinks</h3>}
  />
);

// Presentational components
const PanelMouseLogger = ({ mousePosition }) => (
  <div className="BasicTracker">
    <p>Mouse Position:</p>
    <div className="Row">
      <span>x: {mousePosition.x}</span>
      <span>y: {mousePosition.y}</span>
    </div>
  </div>
);

const PointMouseLogger = ({ mousePosition }) => (
  <p>({mousePosition.x}, {mousePosition.y})</p>
);

// Render Props version of the above
const PanelMouseLoggerUsingRenderProps = () => (
  <div className="BasicTracker">
    <MousePosition
      render={(mousePosition) => (
        <div className="Row">
          <span>x: {mousePosition.x}</span>
          <span>y: {mousePosition.y}</span>
        </div>
      )}
    />
  </div>
);

const PointMouseLoggerUsingRenderProps = () => (
  <MousePosition
    render={(mousePosition) => (
      <p>({mousePosition.x}, {mousePosition.y})</p>
    )}
  />
);

// HOC-wrapped versions
const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

// Main component
function CursorTracker() {
  const [useHOC, setUseHOC] = useState(true);

  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>

      <div className="toggle">
        <label className="toggle-label">
            <input
            type="checkbox"
            checked={useHOC}
            onChange={() => setUseHOC((prev) => !prev)}
            />
            <span className="label-text">Use HOC</span>
        </label>
    </div>


      {useHOC ? (
        <>
          <PanelMouseTracker />
          <PointMouseTracker />
        </>
      ) : (
        <>
          <PanelMouseLoggerUsingRenderProps />
          <PointMouseLoggerUsingRenderProps />
        </>
      )}

      <div className="box">
        <DessertCount />
        <DrinksCount />
      </div>
    </div>
  );
}

export default CursorTracker;
