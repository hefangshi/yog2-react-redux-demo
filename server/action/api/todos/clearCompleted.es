import {
  clearCompleted
}
from '../../../model/index'

export async function post(req, res, next) {
  const data = await clearCompleted(req.userId);
  res.api(data);
}
