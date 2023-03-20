import { Button, Grid, Input } from '@chakra-ui/react';

import useStore from '../store';

const AddTodo = () => {
  const store = useStore()

  return (
    <Grid py={3} templateColumns='5fr 1fr' column='3' columnGap={3}>
        <Input
            placeholder='New todo'
            value={store.newTodo}
            onChange={(e) => store.setNewTodo(e.target.value)}
        />
        <Button onClick={() => store.addTodo()}>Add Todo</Button>
    </Grid>
  )
}

export default AddTodo