import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'

import { HOME_URL, LOGIN_URL } from './utils/constants'


function App() {
  return (
    <Routes>
      <Route index path={HOME_URL} element={<HomePage />} />
      <Route path={LOGIN_URL} element={<LoginPage />} />
    </Routes>
  )
}

export default App
