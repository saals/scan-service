import styles from './layout.module.scss'

import Logo from '../../components/Logo/Logo'
import logoWhite from '../../assets/images/logo-white.png'
import Footer from '../../components/Footer/Footer'

/*import Button from '../../components/Button/Button'
import { ReactComponent as GoogleSVG } from '../../assets/images/google.svg';
import {
  ReactComponent as FacebookSVG
} from '../../assets/images/facebook.svg';
import { ReactComponent as YandexSVG } from '../../assets/images/yandex.svg';
import CardList from '../../components/CardList/CardList'
import TariffCard from '../../components/TariffCard/TariffCard'
import { TARIFFS } from '../../constants'*/


const Layout = ({ children }) => {
  return (
    <>
      <header>
        header
        <Logo />
      </header>

      <main className={styles.main}>{children}</main>

      <Footer />


      {/*<article className={styles.container}>
        <div className={styles.row}>
          <CardList cardList={TARIFFS} cardComponent={TariffCard} />
        </div>

        <div className={styles.column}>
          <Button size="soc"><GoogleSVG /></Button>
          <Button size="soc"><FacebookSVG /></Button>
          <Button size="soc"><YandexSVG /></Button>

          <Button>Зарегистрироваться</Button>
          <Button color="accent" size="big">Запросить данные</Button>
          <Button href={'/'} color="accent" size="big">Запросить данные</Button>

          <Button color="accent" size="smail">Подробнее</Button>
          <Button color="accent" size="big" disabled>Поиск</Button>

          <Button color="primary">Читать в источнике</Button>
          <Button href={'/'} color="primary">Читать в источнике</Button>
        </div>
      </article>*/}

    </>
  )
}

export default Layout
