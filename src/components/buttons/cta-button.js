import React from "react"

import styles from "./button.module.scss"

const CtaButton = ({ color, clickAction, title = "Request a call back" }) => {
  return (
    <button className={styles.button__black} onClick={() => clickAction()}>
      {title}
    </button>
  )
}

export default CtaButton
