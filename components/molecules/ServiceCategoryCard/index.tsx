import Image from "next/image";
import Link from "next/link";

interface ServiceCategoryCardProps {
  image: string;
  label: string;
  path: string;
  onClick?: () => void;
}

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  image,
  label,
  path,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="w-full border border-gray-300 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-100 group transition-all duration-150 overflow-hidden bg-white cursor-pointer"
    >
      {/* Image container - full width, static height */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
        <img src={image} alt={label} className="w-full h-full object-cover" />
      </div>

      {/* Text content with padding - fixed height for consistency */}
      <div className="p-4 h-20 flex items-center">
        <h1 className="text-xl font-semibold leading-tight group-hover:text-blue-600">
          {label}
        </h1>
      </div>
    </div>
  );
};

export default ServiceCategoryCard;
