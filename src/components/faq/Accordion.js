import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { Paper } from "@mui/material";

const Accordion = ({ questionsAnswers }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <Paper className="p-1 pl-5 mb-2">
        <AccordionItem
          showDescription={showDescription}
          fontWeightBold={fontWeightBold}
          ariaExpanded={ariaExpanded}
          item={item}
          index={index}
          onClick={() => {
            setActiveIndex(index);
          }}
        />
      </Paper>
    );
  });

  return (
    <div className="faq">
      <h1 className="faq__title">FAQ</h1>
      <dl className="faq__list">{renderedQuestionsAnswers}</dl>
    </div>
  );
};

export default Accordion;
