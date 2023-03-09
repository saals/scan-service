import { useState } from 'react'
import styles from './user-nav.module.scss'
import classNames from 'classnames/bind'

import avatar from '../../assets/images/avatar.png'


const cx = classNames.bind(styles)

const UserNav = ({ showMobileMenu }) => {
  const [ isLogged, setIsLogged ] = useState(true)

  const navClass = cx({
    nav: true,
    isLogged,
    opened: showMobileMenu
  })

  const linkClass = cx({
    link: true,
    isLogged,
    notLogged: !isLogged
  })

  const handleClick = (e) => {
    e.preventDefault()
    setIsLogged(!isLogged)
  }

  return (
    <nav className={navClass}>
      <a href="/user" className={linkClass}>
        {isLogged ? 'Алексей А.' : 'Зарегистрироваться'}
      </a>

      {isLogged && <img src={avatar} alt="аватар"
                        className={styles.img} />}

      <a href="/" className={linkClass} onClick={handleClick}>
        {isLogged ? 'Выйти' : 'Войти'}
      </a>
    </nav>
  )
}

export default UserNav
