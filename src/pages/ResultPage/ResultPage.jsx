import styles from './result-page.module.scss'

import Layout from '../Layout/Layout'

const ResultPage = () => {
  return (
    <Layout>
      <section className={styles.result}>
        <h1 className={styles.title}>Ищем. Скоро будут результаты</h1>
      </section>
    </Layout>
  )
}

export default ResultPage
