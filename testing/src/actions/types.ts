export interface Comment {
   postId: number;
   id: number;
   name: string;
   email: string;
   body: string;
}

export interface Auth {
   isLoggedIn: boolean;
}

export interface RootState {
   comments: string[];
   auth: boolean;
}

export enum ActionType {
   SAVE_COMMENT,
   FETCH_COMMENTS,
   CHANGE_AUTH
}

export interface Action<T> {
   type: ActionType;
   payload: T;
}
