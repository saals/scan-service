import styles from './button.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles)

const Button = ({ color, size, disabled, children }) => {
  const btnClass = cx({
    btn: !size,
    [`btn-${size}`]: size,
    [`${color}`]: color,
  })

  return (
    <button className={btnClass} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
