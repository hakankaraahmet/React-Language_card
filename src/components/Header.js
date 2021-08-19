import React from 'react'
import reactimage from "../media/react.svg"
const Header = () => {
    return (
        <div>
            <div className="image-container">
                <img className="react-logo" src={reactimage} alt="reactlogo"/> 
            </div>
        </div>
    )
}


export default  Header;