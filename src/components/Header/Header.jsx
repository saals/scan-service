import styles from './header.module.scss'
import classNames from 'classnames/bind'

import { useState } from 'react'
import Logo from '../Logo/Logo'
import MainNav from '../MainNav/MainNav'
import Informer from '../Informer/Informer'
import UserNav from '../UserNav/UserNav'
import Burger from '../Burger/Burger'

import logoWhite from '../../assets/images/logo-white.png'


const cx = classNames.bind(styles)

const Header = () => {
  const [ showMobileMenu, setShowMobileMenu ] = useState(false)

  const headerClass = cx({
    header:true,
    opened: showMobileMenu
  })

  return (
    <header className={headerClass}>
      <Logo src={(showMobileMenu && logoWhite) || undefined} />
      <div className={styles.wrap}>
        <MainNav showMobileMenu={showMobileMenu} />
        <Informer />
        <UserNav showMobileMenu={showMobileMenu} />
      </div>
      <Burger onClick={() => setShowMobileMenu(!showMobileMenu)}
              showMobileMenu={showMobileMenu}
      />
    </header>
  )
}

export default Header
