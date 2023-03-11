import styles from './logo.module.scss'
import logoColor from '../../assets/images/logo-color.png'
import { Link } from 'react-router-dom'
import { HOME_URL } from '../../utils/constants'


const Logo = ({ src = logoColor }) => {
  return (
    <Link to={HOME_URL} className={styles.logo}>
      <img src={src} alt="Логотип" />
    </Link>
  )
}

export default Logo
