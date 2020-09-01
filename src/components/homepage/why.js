import React from "react"

import styles from "./why.module.scss"

const Why = ({ title, paragraph }) => {
  return (
    <div className={styles.why__section}>
      <div className={"custom__container"}>
        <h2 className={styles.why__heading}>{title}</h2>
        <p className={styles.why__paragraph}>{paragraph}</p>
      </div>
    </div>
  )
}

export default Why
