// LESSON 30 extracting action creators
// action creator
let nextTodoId = 0;
const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
};
// LESSON 30 extracting action creators
// action creator
const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};
// LESSON 30 extracting action creators
// action creator
const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export {
    addTodo,
    setVisibilityFilter,
    toggleTodo
}