import commentReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
   const action = {
      type: SAVE_COMMENT,
      payload: 'New Comment'
   };

   const newState = commentReducer([], action);

   expect(newState).toEqual(['New Comment']);
});

it('handle action with unknown type', () => {
   const newState = commentReducer([], { type: 'kfjldfjk' });

   expect(newState).toEqual([]);
});
