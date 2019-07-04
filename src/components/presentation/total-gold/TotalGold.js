import React from 'react';
import './TotalGold.css';
import { connect } from 'react-redux';

let TotalGold= ({totalGold}) => (
    <div className="row">
      <div className="input-group mb-4 col-md-4">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">Your Gold:</span>
        </div>
        <input 
            type="text" 
            className="form-control" 
            name="total_gold" 
            value={totalGold}
        />
      </div>
    </div>
);
const mapStateToProps = (state) => {
  return {
    totalGold: state.totalGold
  }
}
TotalGold = connect(
  mapStateToProps
)(TotalGold);
export default TotalGold;