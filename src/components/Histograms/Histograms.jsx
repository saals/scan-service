// import { useActionData } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
// import SlideHistograms from '../SlideHistograms/SlideHistograms'
// import Slider from '../Slider/SLider'
import styles from './histograms.module.scss'
import '../../scss/_slick-carousel.scss'

import { useGetObjectSearchHistogramsQuery } from '../../redux/api/scan'
import { getObjectSearchRequest } from '../../redux/api/requests'
// import { histogramsSliderSettings } from '../Slider/settings'


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

      {/*<Slider slideComponent={SlideHistograms}
              slides={data?.data} className={styles.slider}
              settings={histogramsSliderSettings} />*/}
    </>
  )
}


export default Histograms
