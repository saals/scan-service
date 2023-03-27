import { Link, useRouteError } from 'react-router-dom'
import { HOME_URL } from '../../utils/constants'
import Layout from '../Layout/Layout'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <Layout>
      <section>
        <h1>Упс, ошибка {error.status} :(</h1>
        <p>
          {error.statusText || error.message}
        </p>
        <p>
          Попробуйте вернуться на <Link to={HOME_URL}>главную</Link>.
        </p>
      </section>
    </Layout>
  )
}

export default ErrorPage
