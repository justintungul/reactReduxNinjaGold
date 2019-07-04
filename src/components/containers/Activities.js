import React from 'react';
import { connect } from 'react-redux';

import { addGold } from '../../actions/actions';
import ActivityCard from '../presentation/ActivityCard/ActivityCard'

let Activities = ({
    onButtonClick
}) => (
    <div className="row">
        <ActivityCard onClick={()=> onButtonClick('farm')} location='farm' verb='farm' />
        <ActivityCard onClick={()=> onButtonClick('cave')} location='cave' verb='spelunk' />
        <ActivityCard onClick={()=> onButtonClick('house')} location='house' verb='rest' />
        <ActivityCard onClick={()=> onButtonClick('casino')} location='casino' verb='gamble'/>
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