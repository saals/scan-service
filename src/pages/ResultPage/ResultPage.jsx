import { useActionData } from 'react-router-dom'
import styles from './result-page.module.scss'

// import { SEARCH_URL } from '../../utils/constants'
import Layout from '../Layout/Layout'
// import Button from '../../components/Button/Button'
import Histograms from '../../components/Histograms/Histograms'
import ResultList from '../../components/ResultList/ReasultList'


/*const actionData = {
  endDate: 'Sun Jan 01 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
  includeAnnouncements: 'false',
  includeDigests: 'false',
  includeTechNews: 'false',
  inBusinessNews: 'false',
  inn: '7710-13706-6',
  limit: '100',
  maxFullness: 'false',
  onlyMainRole: 'false',
  onlyWithRiskFactors: 'false',
  startDate: 'Wed Jan 01 2020 00:00:00 GMT+0300 (Москва, стандартное время)',
  tonality: 'any',
}*/


const ResultPage = () => {
  const actionData = useActionData()
  const hasData = Boolean(actionData)


  return (
    <Layout>
      <section className={styles.result}>
        <h1 className={styles.title}>Ищем. Скоро будут результаты</h1>
        <p className={styles.subtitle}>Поиск может занять некоторое время,
          просим сохранять терпение.</p>
      </section>

      {hasData && (<section className={styles['result-info']}>
        <h2 className={styles.title}>Общая сводка</h2>

        <Histograms actionData={actionData} />
      </section>)}

      {hasData && (<section>
        <h2 className={styles.title}>Список документов</h2>

        <ResultList actionData={actionData} />
      </section>)}

    </Layout>
  )
}

export default ResultPage
