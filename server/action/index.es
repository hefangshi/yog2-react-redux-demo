import App from 'home:page/index/index.js'
import { renderToString } from 'home:node_modules/react-dom/server.js'
import { getTodos } from '../model/index'

export default async function (req, res) {
    const initState = {
        todos: await getTodos(req.userId)
    };

    const nsr = req.query.nsr === '1';
    res.render('home/page/index/index.tpl', {
        initState: JSON.stringify(initState),
        ssr: nsr ? '' : renderToString(App(initState))
    });
}
