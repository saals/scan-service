import styles from './spinner.module.scss'
import { ReactComponent as SpinnerSVG } from '../../assets/images/spinner.svg'


const Spinner = () => {
  return <SpinnerSVG className={styles.spinner} />
}

export default Spinner
