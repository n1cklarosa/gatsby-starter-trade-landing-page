import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

import "./faq.scss"

const Faq = ({ faqs, title, paragraph }) => {
  return (
    <div className={"accordian__wrapper"} id="faq">
      <div className={"accordian__container"}>
        <h2 className={"accordian__heading"}>{title}</h2>
        <p className={"accordian__paragraph"}>{paragraph}</p>
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>{faq.question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{faq.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default Faq
