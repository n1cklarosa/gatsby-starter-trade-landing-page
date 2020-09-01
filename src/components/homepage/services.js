import React from "react"
import { SimpleGrid, Box } from "@chakra-ui/core"

import Image from "../image"

import styles from "./services.module.scss"

const Services = ({ title = "services", paragraph, services }) => {
  return (
    <div className={styles.services__wrapper} id="services">
      <div className={styles.services__inner}>
        <h2>{title}</h2>

        <p className={styles.services__paragraph}>{paragraph}</p>

        <SimpleGrid
          columns={[1, null, 2, 3, 3]}
          spacing={10}
          className={styles.services__grid}
        >
          {services.map((service, index) => (
            <Box className={styles.services__col} key={index}>
              <Image imgSrc={service.image} />
              <h4 className={styles.services__heading__tile}>
                {service.title}
              </h4>
              <p className={styles.services__paragraph__tile}>
                {service.paragraph}
              </p>
            </Box>
          ))}
        </SimpleGrid>
      </div>
    </div>
  )
}

export default Services
