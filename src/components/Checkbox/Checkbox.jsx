import { useField } from 'formik'
import classNames from 'classnames'

import styles from './checkbox.module.scss'

const Checkbox = ({ label, className, ...props }) => {
  const [ field ] = useField(props)

  const groupClass = classNames(styles.group, className)

  return (
    <div className={groupClass}>
      <input
        // className={styles.input}
        type="checkbox"
        id={field.name}
        checked={field.value}
        {...field}
        {...props}
      />

      <label htmlFor={field.id || field.name}
        // className={styles.label}
      >
        {label}
      </label>
    </div>
  )
}

export default Checkbox
