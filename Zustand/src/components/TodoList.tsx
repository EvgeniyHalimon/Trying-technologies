import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";

import useStore from "../store";

function TodoListItems() {
  const store = useStore((state) => state);
  console.log("🚀 ~ file: TodoList.tsx:7 ~ TodoListItems ~ store:", store.todos)

  return (
    <>
      {store.todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            onChange={() => store.toggleTodo(todo.id)}
            checked={todo.done}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => store.updateTodo(todo.id, evt.target.value)}
          />
          <Button onClick={() => store.removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Zustand Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;