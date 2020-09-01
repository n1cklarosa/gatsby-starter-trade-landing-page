import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import SiteNav from "./sitenav"
import Logo from "./logo"

import CtaButton from "./buttons/cta-button"
import PhoneButton from "./buttons/phone-button"
import Modal from "./modal"

// import styles from "./header.module.scss"

const menuItems = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Faq",
    link: "#faq",
  },
]

const Header = ({ siteTitle, sitePhone, headerMenu }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [headerStyle, setHeaderStyle] = useState("site-header full")

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isSmall = currPos.y < -50
      if (isSmall) {
        setHeaderStyle("site-header smaller")
      } else {
        setHeaderStyle("site-header full")
      }
    },
    [headerStyle]
  )

  const toggleModal = () => {
    setModalOpen(true)
  }
  console.log(sitePhone, "phone")
  return (
    <header style={{}} className={headerStyle}>
      <div
        className={"header-inner"}
        style={{
          margin: `0 auto`,
          maxWidth: "96%",
          padding: `0 1.0875rem`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "height 200ms ease",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
              fontSize: "22px",
            }}
          >
            <Logo />
            <span
              style={{
                position: "absolute",
                left: "-10000px",
                top: "auto",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              {siteTitle}
            </span>
          </Link>
        </h1>
        <div className={"top__right"}>
          <SiteNav menuItems={menuItems} headerMenu={headerMenu} />
          <CtaButton clickAction={toggleModal} title={"Contact Me"} />
          <PhoneButton selector={"black phone"} sitePhone={sitePhone} />
        </div>
      </div>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
