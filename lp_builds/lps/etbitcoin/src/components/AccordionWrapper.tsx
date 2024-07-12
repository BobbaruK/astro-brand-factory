import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { LPAccordionItem } from "@/types/lpAccordionItem";
import type { ComponentProps } from "../../../../globals/types/ComponentProps";

interface Props {
  items: LPAccordionItem[];
  componentsProps: ComponentProps;
}

const AccordionWrapper = ({ items, componentsProps }: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full text-start text-2xl">
      {items.map((item, index) => (
        <AccordionItem key={item.value + index} value={item.value}>
          <AccordionTrigger className="no-underline text-start text-acc-heading3 font-light">{item.title[componentsProps.lang]}</AccordionTrigger>
          <AccordionContent className="font-light leading-normal">{item.content[componentsProps.lang]}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionWrapper;
