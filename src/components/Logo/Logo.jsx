import styles from './logo.module.scss'
import logoColor from '../../assets/images/logo-color.png'


const Logo = ({ src = logoColor }) => {
  return (
    <a href="/" className={styles.logo}>
      <img src={src} alt="Логотип" />
    </a>
  )
}

export default Logo
