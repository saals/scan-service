import styles from './button.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles)

const Button = ({ color, size, href, type, disabled, onClick, children }) => {
  const btnClass = cx({
    btn: !size,
    [`btn-${size}`]: size,
    [`${color}`]: color,
  })

  const Tag = href ? 'a' : 'button'
  const buttonType = type ? { type } : {}

  return (
    <Tag className={btnClass} href={href} {...buttonType}
         disabled={disabled} onClick={onClick}>
      {children}
    </Tag>
  )
}

export default Button
