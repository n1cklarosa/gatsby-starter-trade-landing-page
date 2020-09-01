import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/hero"
import Testimonials from "../components/homepage/testimonials"
import BrandedIntro from "../components/homepage/branded-intro"
import Services from "../components/homepage/services"
import Faq from "../components/homepage/faq"
import FullWidthImage from "../components/homepage/full-width-image"
import BrandedFooter from "../components/homepage/branded-footer"
import Why from "../components/homepage/why"
import Modal from "../components/modal"

import YAMLData from "../../content/homepage/index.yml"

const IndexPage = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const testimonials = data.allTestimonials.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={YAMLData.introParagraph}
        sitePhone={YAMLData.phone}
        setModalOpen={setModalOpen}
      />
      <BrandedIntro
        imgSrc={YAMLData.introImage}
        paragraphs={YAMLData.aboutParagraphs}
        setModalOpen={setModalOpen}
        sitePhone={YAMLData.phone}
      />
      <Services
        title={YAMLData.servicesHeading}
        services={YAMLData.services}
        paragraph={YAMLData.servicesParagraph}
      />
      <Why
        title={YAMLData.whyHeading}
        paragraph={YAMLData.whyParagraph}
        sitePhone={YAMLData.phone}
      />
      <Testimonials
        testimonials={testimonials}
        title={YAMLData.testimonialsHeading}
      />
      <Faq
        faqs={YAMLData.faqs}
        title={YAMLData.faqHeading}
        paragraph={YAMLData.faqParagraph}
      />
      <FullWidthImage
        title={YAMLData.imageSectionText}
        imgSrc={YAMLData.imageSectionImage}
        sitePhone={YAMLData.phone}
      />
      <BrandedFooter
        title={YAMLData.footerText}
        setModalOpen={setModalOpen}
        sitePhone={YAMLData.phone}
      />
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allTestimonials: allTestimonials(sort: { fields: order, order: ASC }) {
      nodes {
        id
        name
        company
        url
        quote
      }
    }
  }
`
