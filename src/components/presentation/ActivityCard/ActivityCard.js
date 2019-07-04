import React from 'react';

import './ActivityCard.css';

const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

const ActivityCard = ({
    verb,
    location,
    onClick
}) => (
    <div className="col-md-3">
        <div className="card mb-5">
            <div className="card-body">
                <h1 className="display-1">{capitalize(location)}</h1>
                <h1 className="display-4">(Earns 10 - 20 Gold)</h1>
                <button onClick={onClick} className="btn btn-lg btn-success mt-4">{verb}!</button>
            </div>
        </div>
    </div>
);

export default ActivityCard;