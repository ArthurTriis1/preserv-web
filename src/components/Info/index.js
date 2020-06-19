import React from 'react'
import './style.css'

const Info = props => {

    const { information } = props;

    return (
        <div className="infoOutline">
            <div className="infoInline">
                <h4>{information}</h4>
            </div>
        </div>
    )
}

export default Info;