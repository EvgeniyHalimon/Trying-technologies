import { useRecoilValue } from "recoil";
import { ITodoItem } from "../types";
import { TodoItem, TodoItemCreator, TodoListFilters, TodoListStats } from ".";
import { filteredTodoListState } from "../store/selector";

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);
    return (
        <div>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />

            {todoList.map((todoItem: ITodoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </div>
    )
}

export { TodoList }