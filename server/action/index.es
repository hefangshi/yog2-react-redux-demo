import App from 'home:page/index/server.js'
import { getTodos } from '../model/index'

export default async function (req, res) {
  const initState = {
    todos: await getTodos(req.userId)
  };

  const nsr = req.query.nsr === '1';
  res.render('home/page/index/index.tpl', {
    initState: JSON.stringify(initState),
    ssr: nsr ? '' : App(initState)
  });
}
