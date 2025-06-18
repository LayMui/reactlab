import { useState, useEffect} from 'react'
import "./CursorTracker.css";

const withMousePosition = (WrappedComponent) => {
    return (props) => {
        const [mousePosition, setMousePosition] = useState({x:0, y:0})

        useEffect(() => {
            const handleMousePositionChange = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                })
            }

            window.addEventListener("mousemove", handleMousePositionChange);

            return () => {
                window.removeEventListener("mousemove", handleMousePositionChange);
            }
        }, []);

        // Pass the new props mousePosition down to all components that are interested
        return <WrappedComponent {...props} mousePosition={mousePosition}/> 
    }
}


const PanelMouseLogger = ({mousePosition}) => {
    if (!mousePosition) {
        return null;
    }

    return (
        <div className="BasicTracker">
            <p>Mouse Position:</p>
            <div className="Row">
                <span> x: {mousePosition.x}</span>
                <span> y: {mousePosition.y}</span>
            </div>
        </div>
    )
}

const PointMouseLogger = ({ mousePosition}) => {
        if(!mousePosition) {
            return null;
        }

        return (
            <p>({mousePosition.x}, {mousePosition.y})</p>
        )
    }

   // Implementing cross cutting concern HOC to reduce/prevent code duplication
   const PanelMouseTracker = withMousePosition(PanelMouseLogger);
   const PointMouseTracker = withMousePosition(PointMouseLogger);
   function CursorTracker() {
    return (
        <div className="App">
            <header className="Header">
                Little Lemon Restaurant 🍕
            </header>
            <PanelMouseTracker/>
            <PointMouseTracker/>
        </div>
    )
   }


export default CursorTracker;