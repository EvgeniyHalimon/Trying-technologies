import { atom } from "recoil";
import { ITodoItem } from "../types";

const todoListState = atom({
    key: 'TodoList',
    default: [] as ITodoItem[],
});

const todoListFilterState = atom({
    key: 'TodoListFilter',
    default: 'Show All',
});

export {
    todoListState,
    todoListFilterState
}