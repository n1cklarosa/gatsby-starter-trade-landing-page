import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import CtaButton from "../buttons/cta-button"
import PhoneButton from "../buttons/phone-button"

import styles from "./hero.module.scss"

const Hero = ({ title, sitePhone, setModalOpen }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "homepage/shutterstock_116736052.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 1200, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const toggleModal = () => {
    setModalOpen(true)
  }

  return (
    <div className={styles.bg__wrapper}>
      <div className={styles.bg__content}>
        <h1 className={styles.bg__heading}>{title}</h1>
        <div
          className={styles.bg__cta}
          style={{ display: "flex", flexWrap: "wrap", marginTop: "45px" }}
        >
          <CtaButton
            clickAction={toggleModal}
            title={"Request a call back"}
            style={{ marginBottom: "10px" }}
          />
          <PhoneButton
            selector={"white"}
            sitePhone={sitePhone}
            style={{ marginBottom: "10px" }}
          />
        </div>
      </div>
      <BackgroundImage
        className={styles.hero}
        fluid={data.placeholderImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      />
    </div>
  )
}

export default Hero
