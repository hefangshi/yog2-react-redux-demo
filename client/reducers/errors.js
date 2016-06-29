import { SHOW_ERROR } from '../constants/ActionTypes'

export default function errors(state = [], action) {
   switch (action.type) {
      case SHOW_ERROR:
        return state
      default:
        return state
   }
}
