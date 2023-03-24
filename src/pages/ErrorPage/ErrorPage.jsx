import { Link, useRouteError } from 'react-router-dom'

import styles from './error-page.module.scss'

import { HOME_URL } from '../../utils/constants'
import Layout from '../Layout/Layout'

const ErrorPage = () => {
  document.title = 'Ошибка 404 — СКАН'

  const error = useRouteError()

  console.error(error)

  return (
    <Layout>
      <section className={styles.error}>
        <h1>Упс, ошибка {error.status} :(</h1>

        <p className={styles.error__desc}>
          {error.statusText || error.message}
        </p>

        <p className={styles.error__desc}>
          Попробуйте вернуться на <Link to={HOME_URL}>главную</Link>.
        </p>
      </section>
    </Layout>
  )
}

export default ErrorPage
