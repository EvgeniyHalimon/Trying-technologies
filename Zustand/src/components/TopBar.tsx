import { Button, Grid } from '@chakra-ui/react'
import ThemeModeSwitcher from './ThemeModoSwitcher'
import { Todo } from '../store';

const TopBar = () => {

  return (
    <Grid pt={3} templateColumns='1fr 1fr' columnGap={3}>
        <ThemeModeSwitcher/>
        <Button>Load</Button>
    </Grid>
  )
}

export default TopBar