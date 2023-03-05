import Button from '../../components/Button/Button'
import styles from './ui-page.module.scss'
import { ReactComponent as GoogleSVG } from '../../assets/images/google.svg';
import { ReactComponent as FacebookSVG } from '../../assets/images/facebook.svg';
import { ReactComponent as YandexSVG } from '../../assets/images/yandex.svg';


const UIPage = () => {
  return (
    <div className={styles.column}>
      <Button size="soc"><GoogleSVG /></Button>
      <Button size="soc"><FacebookSVG /></Button>
      <Button size="soc"><YandexSVG /></Button>

      <Button>Зарегистрироваться</Button>
      <Button color="accent" size="big">Запросить данные</Button>
      <Button color="accent" size="smail">Подробнее</Button>
      <Button color="accent" size="big" disabled>Поиск</Button>
      <Button color="primary">Читать в источнике</Button>

    </div>
  )
}

export default UIPage
