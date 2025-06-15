import { Icon } from "@iconify/react";

interface ProcessStepProps {
  title: string;
  description: string;
  icon: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="w-full flex flex-row items-start gap-4 overflow-hidden">
      {/* Icon */}
      <Icon icon={icon} className="w-5 h-5" />

      {/* Title & Description */}
      <div className="w-full space-y-1">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
