import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../actions/actions';

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div>
            {/* input using ref */}
            <input ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                dispatch(addTodo(input.value));
                input.value = ''; // clears input onClick
            }}>
                Add Todo
            </button>
        </div>
    )
};
// creates a container component that passes dispatch as
// a prop to be used above
AddTodo = connect(
//     state => {
//         return {};
//     },
//     dispatch => {
//         return { dispatch };
//     }
)(AddTodo);

export default AddTodo;