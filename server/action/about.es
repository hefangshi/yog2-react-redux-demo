import ReactRenderAction from '../lib/reactRenderAction'

class AboutRenderAction extends ReactRenderAction {
  async getInitialState(req) {
    return {};
  }
}

export default (new AboutRenderAction).render;
