import { Button, Grid } from '@chakra-ui/react'
import ThemeModeSwitcher from './ThemeModoSwitcher'
import { useAtom } from 'jotai';
import { Todo, todosAtom } from '../store';

const TopBar = () => {
  const [, todosSet] = useAtom(todosAtom)
  const onLoad = () => {
      fetch("https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json")
      .then((resp) => resp.json())
      .then((todos: Todo[]) => todosSet(todos))
  }

  return (
    <Grid pt={3} templateColumns='1fr 1fr' columnGap={3}>
        <ThemeModeSwitcher/>
        <Button onClick={onLoad}>Load</Button>
    </Grid>
  )
}

export default TopBar