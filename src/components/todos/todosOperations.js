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

//POST
const addTodo = descr => dispatch => {
    const todo = {
        descr,
        completed: false,
    }

    dispatch(addTodoRequest());

    axios.post('/tasks, todo')
        .then(({ data }) => dispatch(addTodoSuccess(data)))
        .catch(error => dispatch(addTodoError(error.message)))
}

//DELETE
const deleteTodo = todoId => dispatch => {
    dispatch(deleteTodoRequest())

    axios.delete(`tasks/${todoId}`)
        .then(() => dispatch(deleteTodoSuccess(todoId)))
        .catch(error => dispatch(deleteTodoError(error.message)))
}

//PATCH
const toggleCompleted = ({ id, completed }) => dispatch => {
    const update = { completed };
    dispatch(toggleCompletedRequest())

    axios.patch(`tasks/${id}`, update)
        .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
        .catch(error => dispatch(toggleCompletedError(error.message)));
}

const todosOperations = {
    fetchTodos,
    addTodo,
    deleteTodo,
    toggleCompleted,


};
export default todosOperations;