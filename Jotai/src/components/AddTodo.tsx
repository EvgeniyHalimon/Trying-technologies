import { Button, Grid, Input } from '@chakra-ui/react';
import { useAtom } from 'jotai'
import { addTodoAtom, newTodoAtom } from '../store'

const AddTodo = () => {
  const [todoText, textTodoSet] = useAtom(newTodoAtom);
  const [, addTodo] = useAtom(addTodoAtom);

  return (
    <Grid py={3} templateColumns='5fr 1fr' column='3' columnGap={3}>
        <Input
            value={todoText}
            onChange={(e) => textTodoSet(e.target.value)}
            placeholder='New todo'
        />

        <Button onClick={() => addTodo()}>Add Todo</Button>
    </Grid>
  )
}

export default AddTodo