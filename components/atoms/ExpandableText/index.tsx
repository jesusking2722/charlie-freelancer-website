import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ExpandableTextProps {
  title: string;
  description: string;
  children: React.ReactNode;
  hiddenBorder?: boolean;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  title,
  description,
  children,
  hiddenBorder,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div
      className={`w-full p-4 ${
        !hiddenBorder && "border-b-[1px] border-b-gray-300"
      }`}
    >
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-4">{description}</p>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.2, ease: "easeInOut" },
            }}
            className="overflow-hidden"
          >
            <div className="w-full">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4">
        <button
          className="text-blue-600 underline flex flex-row items-center gap-1 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "View less" : "Read more"}
          <Icon
            icon="solar:alt-arrow-down-linear"
            className={`text-blue-600 w-4 h-4 ${
              expanded ? "rotate-180" : "rotate-0"
            } transition-all duration-300 ease-in-out`}
          />
        </button>
      </div>
    </div>
  );
};

export default ExpandableText;
