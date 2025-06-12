import { Accordion } from "@/components/atoms";
import type { TAccordionItem } from "@/types/components.types";
import { useState } from "react";

interface AccordionGroupProps {
  items: TAccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleAccordion = (id: string) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        // Multiple mode: toggle the specific item
        return prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id];
      } else {
        // Single mode: only one can be open at a time
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => toggleAccordion(item.id)}
        >
          <Accordion
            title={item.title}
            description={item.description}
            actived={openItems.includes(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default AccordionGroup;
