import styles from './tariff-list.module.scss'

import { TARIFFS } from '../../constants'
import TariffCard from '../TariffCard/TariffCard'


const TariffList = () => {
  return (
    <div className={styles.list}>
      {TARIFFS.map(tariff => <TariffCard tariff={tariff} key={tariff.title} />)}
    </div>
  )
}

export default TariffList
