import * as axios from 'axios'
import * as types from '../constants/ActionTypes'

export function addTodo(text) {
  return axios.post('/api/todos', {
    text
  }).then(res => {
    if (res.data.errno === 0) {
      return {
        type: types.ADD_TODO,
        todo: res.data.data
      }
    }
    else {
      return showError(res.data.msg);
    }
  }).catch(error => {
    return showError(`request ${error.config.url} ${error.statusText}`);
  })
}

export function deleteTodo(id) {
  return axios.delete(`/api/todos/${id}`, {
    id
  }).then(res => {
    if (res.data.errno === 0) {
      return {
        type: types.DELETE_TODO,
        id
      }
    }
    else {
      return showError(res.data.msg);
    }
  }).catch(error => {
    return showError(`request ${error.config.url} ${error.statusText}`);
  })
}

export function editTodo(id, text) {
  return axios.put(`/api/todos/${id}`, {
    text
  }).then(res => {
    if (res.data.errno === 0) {
      return {
        type: types.EDIT_TODO,
        id,
        text: res.data.data.text
      }
    }
    else {
      return showError(res.data.msg);
    }
  }).catch(error => {
    return showError(`request ${error.config.url} ${error.statusText}`);
  })
}

export function completeTodo(id) {
  return axios.put(`/api/todos/${id}/complete`).then(res => {
    if (res.data.errno === 0) {
      return {
        type: types.COMPLETE_TODO,
        id,
        completed: res.data.data.completed
      }
    }
    else {
      return showError(res.data.msg);
    }
  }).catch(error => {
    return showError(`request ${error.config.url} ${error.statusText}`);
  })
}

export function completeAll() {
  return axios.post('/api/todos/completeAll').then(res => {
    if (res.data.errno === 0) {
      return {
        type: types.COMPLETE_ALL
      }
    }
    else {
      return showError(res.data.msg);
    }
  }).catch(error => {
    return showError(`request ${error.config.url} ${error.statusText}`);
  })
}

export function clearCompleted() {
  return axios.post('/api/todos/clearCompleted').then(res => {
    if (res.data.errno === 0) {
      return {
        type: types.CLEAR_COMPLETED
      }
    }
    else {
      return showError(res.data.msg);
    }
  }).catch(error => {
    return showError(`request ${error.config.url} ${error.statusText}`);
  })
}

export function showError(msg) {
  console.error(msg);
  return {
    type: types.SHOW_ERROR,
    msg: msg
  }
}
