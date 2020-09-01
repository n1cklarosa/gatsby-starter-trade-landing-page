import React from "react"
import { graphql, Link } from "gatsby"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./page.module.css"

export default ({ data }) => {
  console.log("jere", data)
  const page = data.markdownRemark
  return (
    <Layout headerMenu={"page"}>
      <SEO
        title={page.frontmatter.title}
        description={page.excerpt}
        image="/logo.png"
        pathname={page.fields.slug}
        // Boolean indicating whether this is an page:
        page
      />
      <article className={style.page}>
        <h1 className={style.page__title}>{page.frontmatter.title}</h1>

        <div
          className={style.page__content}
          // See https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
