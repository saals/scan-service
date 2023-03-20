import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import SearchPage from './pages/SearchPage/SearchPage'
import ResultPage from './pages/ResultPage/ResultPage'

import { HOME_URL, LOGIN_URL, SEARCH_URL } from './utils/constants'
import RequireAuth from './utils/RequireAuth'
import { isAccessTokenExpire } from './utils/helpers'
import { useAuth } from './hooks/useAuth'
import { logout } from './redux/slices/authSlice'


function App() {
  const { expire } = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAccessTokenExpire(expire)) {
      dispatch(logout())
    }
  }, [ expire, dispatch ])


  return (
    <Routes>
      <Route index path={HOME_URL} element={<HomePage />} />
      <Route path={LOGIN_URL} element={<LoginPage />} />
      <Route path={SEARCH_URL} element={<RequireAuth />}>
        <Route index element={<SearchPage />} />
        <Route path="result" element={<ResultPage />} />
      </Route>
    </Routes>
  )
}

export default App
