import { useTheme } from "@/contexts/ThemeContext";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "motion/react";

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
        ? "px-7 py-3 text-sm"
        : "px-7 py-3 text-base"
    }`,
    fontSize: `${
      size === "small" ? "text-xs" : size === "medium" ? "text-sm" : "text-sm"
    }`,
  };

  const sizeClasses = {
    small: "px-3 py-1 text-xs",
    medium: "px-7 py-3 text-sm",
    large: "px-7 py-3 text-base",
  };

  const iconSizeClasses = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  };

  if (type === "primary") {
    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`${buttonClasses.primary} ${buttonClasses.size} font-semibold rounded-xl transition-all duration-300 ease-in-out`}
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
      </motion.button>
    );
  }

  if (type === "outline" && size) {
    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-all duration-300 ease-in-out ${
          loading || disabled
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer"
        } ${sizeClasses[size]}`}
        onClick={onClick}
        disabled={disabled || loading}
      >
        {icon && !loading && <Icon icon={icon} className="w-4 h-4 mr-2" />}
        {label}
        {loading && (
          <Icon icon="svg-spinners:bars-rotate-fade" className="w-4 h-4 ml-2" />
        )}
      </motion.button>
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

  if (type === "icon" && icon && size) {
    return (
      <button
        className="p-2 rounded-full hover:bg-[#252525] transition-all duration-300 ease-in-out cursor-pointer"
        onClick={onClick}
      >
        <Icon
          icon={icon}
          className={`${iconSizeClasses[size]}`}
          color="white"
        />
      </button>
    );
  }

  return null;
};

export default Button;
