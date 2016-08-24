import ReactRenderAction from '../lib/reactRenderAction'
import { getTodos } from '../model/index'

class IndexRenderAction extends ReactRenderAction {
  async getInitialState(req) {
    // 不同页面使用不同的initialState会导致在A页面访问B页面，B页面刷新，再后退回A页面时，A页面的initialState仍为B页面的值
    // 这种情况只能在前端判断，如果没有合适的数据，在前端重新拉取，本DEMO中未添加这个功能
    // 
    // 还有另一种实现方法为所有react页面请求均在router.es中导向同一个action，initialState只存放最通用的数据
    return {
      todos: await getTodos(req.userId)
    };
  }
}

export default (new IndexRenderAction).render;
