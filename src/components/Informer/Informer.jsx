import styles from './informer.module.scss'


const Informer = () => {
  return (
    <div className={styles.informer}>
      <p className={styles.text}>Использовано компаний<span className={styles.num}>34</span></p>
      <p className={styles.text}>Лимит по компаниям<span className={styles['num-color']}>100</span></p>
    </div>
  )
}

export default Informer
