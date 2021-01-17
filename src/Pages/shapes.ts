import { CREATE_TODO, REMOVE_TODO} from './actions';

export interface todoState {
    text: string;
    isComplete: boolean;
}

interface CreateTodoAction {
    type: typeof CREATE_TODO
    payload: todoState
}

interface RemoveTodoAction {
    type: typeof REMOVE_TODO
    payload: todoState
}

export type ToDoActions = CreateTodoAction | RemoveTodoAction;