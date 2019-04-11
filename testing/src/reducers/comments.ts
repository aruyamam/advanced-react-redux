import { Action, ActionType, Comment, RootState } from '../actions/types';
import { AxiosResponse } from 'axios';

export default function(
   state: RootState[] = [],
   action: Action<AxiosResponse>
) {
   switch (action.type) {
      case ActionType.SAVE_COMMENT:
         return [...state, action.payload];

      case ActionType.FETCH_COMMENTS:
         const comments = action.payload.data.map(
            (comment: Comment) => comment.name
         );
         return [...state, ...comments];

      default:
         return state;
   }
}
