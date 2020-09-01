import React from "react"
import styles from "./full-width-image.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const FullWidthImage = ({ imgSrc, title = "You are in good hands" }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 1500, maxHeight: 550, cropFocus: ATTENTION) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(imgSrc)
  })
  if (!image) {
    return <>Image not found</>
  }
  return (
    <div className={styles.bg__wrapper}>
      <div className={styles.bg__content}>
        <h2 className={styles.bg__heading}>{title}</h2>
      </div>
      <BackgroundImage
        className={styles.hero}
        fluid={image.node.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      />
    </div>
  )
}

export default FullWidthImage
