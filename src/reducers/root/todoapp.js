import { combineReducers } from 'redux';
import { visibilityFilter } from '../children/visibilityFilter';
import { todos } from '../children/todos';

// import { visibilityFilter, todos } from '../children';

// root reducer
const todoApp = combineReducers({
    todos, // olsn
    visibilityFilter // olsn
});

export default todoApp;