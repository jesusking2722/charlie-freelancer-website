import { useTheme } from "@/contexts/ThemeContext";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface ButtonProps {
  type: "primary" | "secondary" | "outline" | "link" | "icon" | "text";
  label?: string;
  icon?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  icon,
  size,
  disabled,
  loading,
  href,
  onClick,
}) => {
  const { theme } = useTheme();

  const buttonClasses = {
    primary: `${
      loading || disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    } ${
      theme === "dark"
        ? "bg-blue-500 hover:bg-blue-400"
        : "bg-blue-600 hover:bg-blue-500"
    } text-white`,
    size: `${
      size === "small"
        ? "px-3 py-1 text-xs"
        : size === "medium"
        ? "px-5 py-2 text-sm"
        : "px-5 py-2 text-base"
    }`,
    fontSize: `${
      size === "small" ? "text-xs" : size === "medium" ? "text-sm" : "text-base"
    }`,
  };

  if (type === "primary") {
    return (
      <button
        className={`${buttonClasses.primary} ${buttonClasses.size} font-semibold rounded-lg transition-all duration-300 ease-in-out`}
        onClick={onClick}
      >
        {icon && !loading && (
          <Icon icon={icon} className="w-4 h-4" color="white" />
        )}
        {label}
        {loading && (
          <Icon
            icon="svg-spinners:bars-rotate-fade"
            className="w-4 h-4"
            color="white"
          />
        )}
      </button>
    );
  }

  if (type === "link" && href) {
    return (
      <Link
        href={href}
        className={`${size} transition-all duration-300 ease-in-out`}
      >
        {label}
      </Link>
    );
  }

  if (type === "text") {
    return (
      <button
        className={`${size} transition-all duration-300 ease-in-out cursor-pointer ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        {label}
      </button>
    );
  }
};

export default Button;
