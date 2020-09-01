import React from "react"
import { SimpleGrid, Box } from "@chakra-ui/core"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import twitterLogo from "./twitter.svg"
import linkedInLogo from "./linkedin.svg"
import githubLogo from "./github.svg"

import logo from "./logo.svg"

import styles from "./footer.module.scss"

const Footer = ({ siteTitle, sitePhone }) => (
  <footer
    style={{
      paddingTop: "80px",
      paddingBottom: "80px",
      backgroundColor: "black",
      color: "white",
    }}
  >
    <div className={styles.footer__container}>
      <SimpleGrid
        columns={[1, null, 3, 3, 3]}
        spacing={10}
        className={styles.footer__grid}
      >
        <Box className={styles.footer__col1}>
          <img
            style={{
              marginBottom: "45px",
              marginTop: "-15px",
              width: "200px",
              maxWidth: "100%",
              height: "auto",
              display: "inline",
            }}
            src={logo}
            alt="Site Logo"
            className={"footer__logo"}
          />
        </Box>

        <Box className={styles.footer__col2}>
          <ul className={styles.footersocials}>
            <li>
              <OutboundLink
                href="https://twitter.com/nick_la_rosa"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitterLogo} alt="socials" />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://www.linkedin.com/in/nick-la-rosa-67404733/?originalSubdomain=au"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedInLogo} alt="socials" />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://github.com/n1cklarosa"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubLogo} alt="socials" />
              </OutboundLink>
            </li>
          </ul>
        </Box>

        <Box className={styles.footer__col3}>
          <p style={{ marginTop: "15px" }}>
            <strong>
              Phone: <a href="tel:0280057457">{sitePhone}</a>
            </strong>
          </p>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={[1]} spacing={0} className={styles.services__grid}>
        <Box className={styles.footer__base}>
          © {new Date().getFullYear()} {siteTitle}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Box>
      </SimpleGrid>
    </div>
  </footer>
)

export default Footer
