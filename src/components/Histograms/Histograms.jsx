import Spinner from '../Spinner/Spinner'
import styles from './histograms.module.scss'
import '../../scss/_slick-carousel.scss'
import { useGetObjectSearchHistogramsQuery } from '../../redux/api/scan'
import { getObjectSearchRequest } from '../../redux/api/requests'
import HistogramsSlider from '../HistogramsSlider/HistogramsSlider'

const Histograms = ({ actionData }) => {
  const request = getObjectSearchRequest(actionData)
  const { data, isLoading } = useGetObjectSearchHistogramsQuery(request)

  return (
    <>
      <p className={styles.founded}>
        Найдено {isLoading ? <Spinner /> : data.total} вариантов
      </p>

      <HistogramsSlider
        isLoading={isLoading}
        slides={data?.data}
      />
    </>
  )
}

export default Histograms
