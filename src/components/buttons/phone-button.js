import React from "react"

import styles from "./button.module.scss"

const PhoneButton = ({ selector = "white", sitePhone = "na" }) => {
  return (
    <a
      className={
        selector === "white" ? styles.button__white : styles.button__phone_black
      }
      href={"tel:" + sitePhone.replace(/ /g, "")}
    >
      <span>{sitePhone}</span>
    </a>
  )
}

export default PhoneButton
