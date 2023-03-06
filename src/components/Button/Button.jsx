import styles from './button.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles)

const Button = ({ color, size, href, disabled, children }) => {
  const btnClass = cx({
    btn: !size,
    [`btn-${size}`]: size,
    [`${color}`]: color,
  })

  const Tag = href ? 'a' : 'button'

  return (
    <Tag className={btnClass} href={href} disabled={disabled}>
      {children}
    </Tag>
  )
}

export default Button
