import React from 'react';
import './History.css';
import { connect } from 'react-redux';

let History = ({
    history
}) => {
    const items = history.map((item, idx) => {
        return <p key={idx} style={{color: item.color}}>{item.message}</p>
    })
    return (
            <div className="row">
            <div className="col-md-12">
                <h1 className="display-2 acts-hd">Activities</h1>
                <div className="card mb-1">
                    <div className="card-body">
                        {items}
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}
History = connect(
    mapStateToProps
)(History);

export default History;