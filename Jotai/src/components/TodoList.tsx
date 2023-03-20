import { Button, Checkbox, Flex, Heading, Input } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { removeTodoAtom, Todo, todosAtom, toggleTodoAtom, updateTodoAtom } from '../store'

const TodoListItems = () => {
    const [todos] = useAtom(todosAtom)
    console.log("🚀 ~ file: TodoList.tsx:7 ~ TodoListItems ~ todos:", todos)
    const [,updateTodo] = useAtom(updateTodoAtom)
    const [,removeTodo] = useAtom(removeTodoAtom)
    const [,toggleTodo] = useAtom(toggleTodoAtom)

    return(
        <>
            {todos.map((todo: Todo) => (
                <Flex pt={2} key={todo.id}>
                    <input type={'checkbox'} onClick={() => toggleTodo(todo.id)} checked={todo.done}/>
                    <Input
                        mx={2}
                        value={todo.text}
                        onChange={(e) => updateTodo({ id: todo.id, text: e.target.value })}
                    />
                    <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
                </Flex>
            ))}
        </>
    )
}

const TodoList = () => {
  return (
    <>
        <Heading>Todo List</Heading>
        <TodoListItems/>
    </>
  )
}

export default TodoList