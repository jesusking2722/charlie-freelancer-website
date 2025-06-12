import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Accordion } from "@/components/atoms";
import type { TAccordionImageViewerItem } from "@/types/components.types";

interface AccordionImageViewerProps {
  items: TAccordionImageViewerItem[];
  defaultSelected?: string;
}

const AccordionImageViewer: React.FC<AccordionImageViewerProps> = ({
  items,
  defaultSelected,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(
    defaultSelected || null
  );

  const toggleAccordion = (id: string) => {
    if (id !== selectedId) {
      setSelectedId((prev) => (prev === id ? null : id));
    }
  };

  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <div className="w-full flex gap-10">
      {/* Left Side - Accordion Group */}
      <div className="w-1/2">
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer transition-all duration-200`}
              onClick={() => toggleAccordion(item.id)}
            >
              <Accordion
                title={item.title}
                description={item.description}
                actived={selectedId === item.id}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image Display */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full h-[500px] flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedItem ? (
              <motion.img
                key={selectedItem.id}
                src={selectedItem.imageUrl}
                alt={selectedItem.imageAlt || selectedItem.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-500 text-center"
              >
                <div className="text-6xl mb-4">🖼️</div>
                <p>Select an accordion to view image</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AccordionImageViewer;
