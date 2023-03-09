import styles from './home-page.module.scss'

import Layout from '../Layout/Layout'
import Button from '../../components/Button/Button'
import Slider from '../../components/Slider/SLider'
import { featuresSliderSettings } from '../../components/Slider/settings'
import SlideFeature from '../../components/SlideFeature/SlideFeature'
import { FEATURES } from '../../utils/placeholders'


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

      <section className={styles.features}>
        <h2 className={styles.title}>Почему именно мы</h2>
        <Slider className={styles.slider} slideComponent={SlideFeature}
                slides={FEATURES} settings={featuresSliderSettings} />
      </section>
    </Layout>
  )
}

export default HomePage
