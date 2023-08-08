/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRecoilState } from "recoil";
import { todoListState } from "../store/atoms";
import { ITodoItem } from "../types";

function replaceItemAtIndex(arr: ITodoItem[], index: number, newValue: string) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: ITodoItem[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const TodoItem = ({ item }: any) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = (e : any) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: e.target.value,
        }) as ITodoItem[];

        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        }) as ITodoItem[];

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index) as ITodoItem[];

        setTodoList(newList);
    };

    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    );
}

export { TodoItem }
