import {
  addTodo,
  setTodo,
  deleteTodo
}
from '../../../model/index'

export async function post(req, res, next) {
  const ret = await addTodo(req.userId, req.body.text);
  res.api(ret);
}

export async function put(req, res, next) {
  const ret = await setTodo(req.userId, parseInt(req.params.id, 10), req.body.text);
  res.api(ret);
}

export async function del(req, res, next) {
  const ret = await deleteTodo(req.userId, parseInt(req.params.id, 10));
  res.api(ret);
}
