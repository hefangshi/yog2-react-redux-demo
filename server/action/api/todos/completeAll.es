import {
  completeAll
}
from '../../../model/index'

export async function post(req, res, next) {
  const data = await completeAll(req.userId);
  res.api({}, data, data === 0 ? '' : 'redis errno');
}
