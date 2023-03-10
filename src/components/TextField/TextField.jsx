import { useField } from 'formik'
import classNames from 'classnames'
// import MaskedInput from 'react-text-mask' //todo удалить?

import styles from './text-field.module.scss'
// import getMaskByInputName from './masks'


const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const hasError = meta.touched && meta.error

  const groupClass = classNames(styles.group, {
    [`${styles.error}`]: hasError,
  })

  // const mask = getMaskByInputName(props.name)

  return (
    <div className={groupClass}>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>

      <input className={styles.input} {...field} {...props} />
      {/*<MaskedInput className={styles.input} {...field} {...props} mask={mask} />*/}

      {hasError ? <div className={styles.message}>{meta.error}</div> : null}
    </div>
  )
}

export default TextField
