import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './SlideMenuComponent.module.css'

export default function SlideMenuComponent({ options, colors }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  function closedMenu() {
    return (
      <nav className={`${styles.navBack} ${!menuOpen ? styles.slideInLeft : styles.slideOutLeft}`} aria-hidden={menuOpen} focusable={!menuOpen} style={{ backgroundColor: colors.background }}>
        <ul className={styles.ulBack}>
          <li className={styles.li}>
            <FontAwesomeIcon icon={faBars} className={styles.icon} style={{ color: colors.text }} onClick={toggleMenu} aria-hidden={!menuOpen ? false : true} focusable={!menuOpen ? false : true} />
          </li>
        </ul>
      </nav>
    )
  }

  function openedMenu() {
    return (
      <nav className={`${styles.nav} ${menuOpen ? styles.slideInLeft : styles.slideOutLeft}`} style={{ backgroundColor: colors.background }}>
        <ul className={styles.ul}>
          <li className={styles.li} onClick={toggleMenu} style={{ color: colors.text }}>
            <FontAwesomeIcon className={styles.icon} icon={faXmark} aria-hidden={!menuOpen ? true : false} focusable={menuOpen} />
          </li>
          {
            options.map((option) => {
              return (
                <li className={styles.li} style={{ color: colors.text }} key={option.key}>
                  <NavLink to={option.to} className={({ isActive }) => isActive ? styles.linkActive : styles.link} style={{ color: colors.text }} >
                    {option.label}
                  </NavLink>
                  <FontAwesomeIcon icon={option.icon} className={styles.icon} />
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }

  return (
    <>
      {closedMenu()}
      {openedMenu()}
      
      <Outlet />
    </>
  )
}