import * as React from "react"


/* To demonstrate React.cloneElement and React.children 
** use to manipulate children dynamically in JSX
*/
const Row = ({children, spacing}) => {
    const childStyle = {
        marginLeft: `${spacing}px`
    }
    return (
        <div className="Row">
        {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
                style: { ...child.props.style, // keeps any style the child already had.
                    ...(index > 0 ? childStyle: {})
                }
            })
        })}
        </div>
        
    )
};

function LiveOrder() {
    return (
        <div className="">
            <Row spacing={32}>
                <p>Pizza Margarita</p>
                <p>2</p>
                <p>30$</p>
                <p>18.30</p>
            </Row>
        </div>
    )
};

export default LiveOrder;

