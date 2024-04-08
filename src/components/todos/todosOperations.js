import {
    addTodoRequest,
    addTodoSuccess,
    addTodoError,
    deleteTodoRequest,
    deleteTodoSuccess,
    deleteTodoError,
    toggleCompletedRequest,
    toggleCompletedSuccess,
    toggleCompletedError,
    fetchTodosRequest,
    fetchTodosSuccess,
    fetchTodosError,
} from './todosActions.js';

import axios from 'axios';

//GET

const fetchTodos = () => async dispatch => {
    dispatch(fetchTodosRequest());
    try {
        const { data } = await axios.get('/tasks');
        dispatch(fetchTodosSuccess(data))
    } catch (error) {
        dispatch(fetchTodosError(error.message))
    }
}

const todosOperations = {
    fetchTodos,

};
export default todosOperations;