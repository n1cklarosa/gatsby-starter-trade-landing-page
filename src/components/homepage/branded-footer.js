import React from "react"

import CtaButton from "../buttons/cta-button"
import PhoneButton from "../buttons/phone-button"

import styles from "./branded-footer.module.scss"

const BrandedFooter = ({ title, setModalOpen, sitePhone }) => {
  const toggleModal = () => {
    setModalOpen(true)
  }
  return (
    <div className={styles.branded__wrapper} id="about">
      <div className={styles.branded__container} id="about">
        <h2 className={styles.branded__header}>{title}</h2>
        <div className={styles.branded__cta}>
          <CtaButton clickAction={toggleModal} title={"Request a call back"} />
          <PhoneButton selector={"white"} sitePhone={sitePhone} />
        </div>
      </div>
    </div>
  )
}

export default BrandedFooter
