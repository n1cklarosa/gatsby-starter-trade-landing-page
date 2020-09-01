import React from "react"

import styles from "./modal.module.scss"
import ContactForm from "./contact-form"
import { SimpleGrid, Box } from "@chakra-ui/core"

const Modal = ({ modalOpen, setModalOpen }) => {
  return modalOpen ? (
    <div className={styles.modal__wrapper}>
      <div
        style={{
          maxWidth: "100%",
          width: "var(--content-w-regular)",
          padding: "0 1.25rem",
          margin: "0 auto",
        }}
      >
        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          <Box>
            <h3 style={{ fontWeight: "700", fontSize: "35px" }}>Lets chat!</h3>
            <button onClick={() => setModalOpen(!modalOpen)}>close</button>
          </Box>
          <Box>
            <ContactForm />
          </Box>
        </SimpleGrid>
      </div>
    </div>
  ) : null
}

export default Modal
