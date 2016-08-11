import ReactRenderAction from '../lib/ReactRenderAction'

class AboutRenderAction extends ReactRenderAction {
  async getInitialState(req) {
    return {};
  }
}

export default (new AboutRenderAction).render;
