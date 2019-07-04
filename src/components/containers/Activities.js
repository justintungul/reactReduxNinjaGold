import React from 'react';
import { connect } from 'react-redux';

import { addGold } from '../../actions/actions';
import ActivityCard from '../presentation/ActivityCard/ActivityCard'

let Activities = ({
    onButtonClick
}) => (
    <div className="row">
        <ActivityCard onClick={()=> onButtonClick('farm')} location='farm' />
        <ActivityCard onClick={()=> onButtonClick('cave')} location='cave' />
        <ActivityCard onClick={()=> onButtonClick('house')} location='house' />
        <ActivityCard onClick={()=> onButtonClick('casino')} location='casino' />
    </div>
);
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onButtonClick: (location) => {
            return dispatch(addGold(location));
        }
    };
};
Activities = connect(
    state => {
        return {}
    },
    mapDispatchToProps
)(Activities);

export default Activities;