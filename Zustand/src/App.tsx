
import { Box, ChakraProvider, theme } from '@chakra-ui/react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import TopBar from './components/TopBar'

function App() {

  return (
    <ChakraProvider theme={theme}>
        <Box maxWidth='8xl' height='100vh' margin='auto'>
          <TopBar/>
          <AddTodo/>
          <TodoList/>
        </Box>
    </ChakraProvider>
  )
}

export default App
