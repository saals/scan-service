import { createBrowserRouter } from 'react-router-dom'

import {
  HOME_URL,
  LOGIN_URL,
  SEARCH_URL,
  RESULT_URL,
} from '../utils/constants'

import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SearchPage from '../pages/SearchPage/SearchPage'
import ResultPage from '../pages/ResultPage/ResultPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import RequireAuth from '../components/RequireAuth/RequireAuth'
import { getFormValues } from './action'

const router = createBrowserRouter([
  {
    path: HOME_URL,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: LOGIN_URL,
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: SEARCH_URL,
    element: <RequireAuth />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: SEARCH_URL,
        element: <SearchPage />,
      },
      {
        path: RESULT_URL,
        element: <ResultPage />,
        action: getFormValues,
      },
    ],
  },
])

export default router
