import styles from './burger.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles)

const Burger = ({ onClick, showMobileMenu }) => {
  const burgerClass = cx({
    burger: true,
    opened: showMobileMenu
  })

  return (
    <button className={burgerClass}
            onClick={onClick} />
  )
}

export default Burger
