interface ButtonProps {
  type: "primary" | "secondary" | "outline" | "link" | "icon";
  label?: string;
  icon?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  icon,
  size,
  disabled,
  loading,
  onClick,
}) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md"></button>
  );
};
