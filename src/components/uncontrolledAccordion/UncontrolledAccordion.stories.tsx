import { UncontrolledAccordion } from "./UncontrolledAccordion";

export default {
  title: "Uncontrolled Accordion",
  component: UncontrolledAccordion,
};

export const UncontrolledAccordionStory = () => (
  <UncontrolledAccordion
    heading={"This accordion is uncontrolled (he doesn't accept props)"}
  />
);
