import styles from './button.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles)

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noreferrer')
}

const Button = ({
                  color, size, href, type, disabled,
                  onClick, newWindow, children
                }) => {
  const btnClass = cx({
    btn: !size,
    [`btn-${size}`]: size,
    [`${color}`]: color,
  })

  const Tag = href ? 'a' : 'button'
  const buttonType = type ? { type } : {}

  const handleOnBlankClick = (e) => {
    e.preventDefault()

    openInNewTab(href)
  }

  return (
    <Tag className={btnClass} href={href}
         {...buttonType} disabled={disabled}
         onClick={newWindow ? handleOnBlankClick : onClick}>
      {children}
    </Tag>
  )
}

export default Button
