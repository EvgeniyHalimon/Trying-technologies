import { Route, Routes } from 'react-router'
import './App.css'
import { TodoList, Whales } from './components'

function App() {

  return (
    <Routes>
      <Route path='/' element={<TodoList/>}/>
      <Route path='/whales' element={<Whales/>}/>
    </Routes>
  )
}

export default App
