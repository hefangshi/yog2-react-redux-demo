import {
  completeTodo
}
from '../../../model/index'

export async function put(req, res, next) {
  const ret = await completeTodo(req.userId, parseInt(req.params.id, 10));
  res.api(ret);
}
