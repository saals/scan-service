import { format } from 'date-fns'

import styles from './slide-histograms.module.scss'

const SlideHistograms = ({ slide: { date, totalDocuments, riskFactors } }) => {
  // const formatDate = date.slice(0, 10).split('-').reverse().join('.')

  return (
    <div className={styles.inner}>
      <div className={styles.content}>
        <p className={styles.text}>{format(date, 'dd.MM.yyyy')}</p>

        <p className={styles.text}>{totalDocuments}</p>

        <p className={styles.text}>{riskFactors}</p>
      </div>
    </div>
  )
}

export default SlideHistograms
//todo
