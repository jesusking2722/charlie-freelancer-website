import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";

interface AccordianProps {
  title: string;
  description: string;
  actived: boolean;
}

const Accordion: React.FC<AccordianProps> = ({
  title,
  description,
  actived,
}) => {
  const { theme } = useTheme();

  return (
    <div className="w-full p-4 border-b-[1px] border-b-gray-300">
      <button className="text-xl font-semibold">{title}</button>
      <AnimatePresence>
        {actived && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <motion.p
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mt-4"
            >
              {description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
