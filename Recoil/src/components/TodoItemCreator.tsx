/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../store/atoms";
import { ITodoItem } from "../types";

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState<ITodoItem[]>(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList: ITodoItem[]) => [
            ...oldTodoList,
            {
                id: oldTodoList.length + 1,
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    const onChange = (e: any) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
}

export { TodoItemCreator }