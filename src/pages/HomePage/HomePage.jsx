import styles from './home-page.module.scss'

import Layout from '../Layout/Layout'
import Button from '../../components/Button/Button'


const HomePage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Сервис по&nbsp;поиску публикаций о&nbsp;компании по&nbsp;его&nbsp;ИНН
        </h1>
        <p className={styles.subtitle}>
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </p>
        <Button href={'/search'} color={'accent'} size={'big'}>
          Запросить данные
        </Button>
      </section>
    </Layout>
  )
}

export default HomePage
