import styles from './main-nav.module.scss'
import classNames from 'classnames/bind'

import { MAIN_NAV_LINKS } from '../../utils/placeholders'


const cx = classNames.bind(styles)

const MainNav = ({ showMobileMenu }) => {
  const navClass = cx({
    nav: true,
    opened: showMobileMenu
  })

  return (
    <nav className={navClass}>
      {MAIN_NAV_LINKS.map(link => {
        return (
          <a href={'/' + link.path} key={link.path}>{link.name}</a>
        )
      })}
    </nav>
  )
}

export default MainNav
