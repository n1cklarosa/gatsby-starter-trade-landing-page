import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

import style from "./sitenav.module.css"

const SiteNav = ({ menuItems, headerMenu }) => {
  return (
    <nav className={style.navigation}>
      {headerMenu === "home" ? (
        <ul>
          {menuItems.map(props => (
            <li key={props.name}>
              <button
                className={style.button__link}
                onClick={() => scrollTo(props.link)}
              >
                {props.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li>
            <Link className={style.button__link} to={"/"}>
              Home
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default SiteNav
