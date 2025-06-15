import React from "react";
import Image from "next/image";

interface SAvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  isOnline?: boolean;
  showStatus?: boolean;
  className?: string;
}

const SAvatar: React.FC<SAvatarProps> = ({
  src,
  alt,
  size = "md",
  isOnline = false,
  showStatus = true,
  className = "",
}) => {
  // Size mappings
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-14 h-14", // Default size for ProjectCard
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const statusSizeClasses = {
    sm: "w-2 h-2 border border-white",
    md: "w-3 h-3 border-2 border-white",
    lg: "w-4 h-4 border-2 border-white",
    xl: "w-5 h-5 border-2 border-white",
  };

  const statusPositionClasses = {
    sm: "top-0 left-0",
    md: "top-0.5 left-0.5",
    lg: "top-1 left-1",
    xl: "top-1 left-1",
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* SAvatar Image */}
      <div
        className={`${sizeClasses[size]} relative overflow-hidden rounded-full`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Status Indicator */}
      {showStatus && (
        <div
          className={`absolute ${statusPositionClasses[size]} ${
            statusSizeClasses[size]
          } rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"}`}
        />
      )}
    </div>
  );
};

export default SAvatar;
