'use strict'
import Root from 'home:page/root/server.js'
import { match } from 'home:node_modules/react-router/lib/index.js'
import routes from 'home:routes/index.js'

export default class ReactRenderAction {
  constructor(){
    this.render = this.render.bind(this);
  }
  async getInitialState(req){
    return {};
  }
  async render(req, res, next){
    const self = this;
    const initialState = await self.getInitialState(req);
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        next(error);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        const nsr = req.query.nsr === '1';
        res.render('home/page/root/index.tpl', {
          initialState: JSON.stringify(initialState),
          ssr: nsr ? '' : Root(initialState, renderProps)
        });
      } else {
        next();
      }
    });
  }
}
