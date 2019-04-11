import { Action, ActionType } from '../actions/types';

export default function(state = false, action: Action<boolean>) {
   switch (action.type) {
      case ActionType.CHANGE_AUTH:
         return action.payload;

      default:
         return state;
   }
}
