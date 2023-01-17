import { Routes, Route } from 'react-router-dom'

import { Register } from '../pages/Register'
import { List } from '../pages/List'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Register />}/>
      <Route path='/list' element={<List />}/>
    </Routes>
  )
}