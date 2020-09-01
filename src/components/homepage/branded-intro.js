import React from "react"
import { SimpleGrid, Box, Text } from "@chakra-ui/core"
// import { useStaticQuery, graphql } from "gatsby"
// import styled from "styled-components"

import CtaButton from "../buttons/cta-button"
import PhoneButton from "../buttons/phone-button"
import BrandedImage from "./sections/branded-image"

import styles from "./branded-intro.module.css"

const BrandedIntro = ({ paragraphs, setModalOpen, sitePhone, imgSrc }) => {
  const clickAtion = () => {
    alert()
  }
  const toggleModal = () => {
    setModalOpen(true)
  }
  return (
    <div className={styles.branded__wrapper} id="about">
      <div className={styles.branded__container}>
        <SimpleGrid
          columns={[1, null, 2]}
          spacing={10}
          className={styles.branded__grid}
        >
          <Box className={styles.branded__col}>
            <BrandedImage imgSrc={imgSrc} />
          </Box>
          <Box className={styles.branded__col}>
            {paragraphs.map((paragraph, index) => (
              <Text key={index}>{paragraph.paragraph}</Text>
            ))}
            <div className={styles.branded__cta}>
              <CtaButton
                clickAction={toggleModal}
                title={"Request a callback"}
              />
              <PhoneButton
                selector={"white"}
                clickAction={clickAtion}
                sitePhone={sitePhone}
              />
            </div>
          </Box>
        </SimpleGrid>
      </div>
    </div>
  )
}

export default BrandedIntro
