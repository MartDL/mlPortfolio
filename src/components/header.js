import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'


const Header = () => {
    return (
        <header className={headerStyles.header}>
           <nav>
              <ul className={headerStyles.mainNav}>
                {/* <li><Link className={headerStyles.left}>Home</Link></li> */}
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">about</Link></li>
                <li><a href="https://github.com/MartDL" target="_blank" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>github</a></li>
                <li><a href="https://www.instagram.com/mdlcodes/" target="_blank" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>instgram</a></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>projects</Link></li>
                <li></li>
              </ul>
            </nav>
        </header>
    )
}

export default Header
