import axios from 'axios';
import { Action, ActionType } from './types';

export function saveComment(comment: string): Action<string> {
   return {
      type: ActionType.SAVE_COMMENT,
      payload: comment
   };
}

export function fetchComments() {
   const response = axios.get('http://jsonplaceholder.typicode.com/comments');

   return {
      type: ActionType.FETCH_COMMENTS,
      payload: response
   };
}

export function changeAuth(isLoggedIn: boolean): Action<boolean> {
   return {
      type: ActionType.CHANGE_AUTH,
      payload: isLoggedIn
   };
}
