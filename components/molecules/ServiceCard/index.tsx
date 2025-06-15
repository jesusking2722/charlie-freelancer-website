import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { TNavItem } from "@/components/templates/NavLayout";

interface ServiceCardProps {
  title: string;
  services: TNavItem[];
  imageUrl?: string;
  icon?: React.ReactNode;
  showAll: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  services,
  imageUrl,
  icon,
  showAll,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer relative">
      {/* Image/Icon Section */}
      <div className="mb-4 h-56 bg-gray-100 rounded-t-2xl flex items-center justify-center overflow-hidden relative w-full">
        {imageUrl ? (
          <Image src={imageUrl} alt={title} className="object-cover" fill />
        ) : (
          <div className="text-gray-400">{icon}</div>
        )}
      </div>

      {/* Card content */}
      <div className="w-full px-4 pb-4 flex flex-col items-start justify-between">
        {/* Title & list */}
        <div className="mb-2">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>

          {/* Services List */}
          <div className="space-y-2 mb-6 flex flex-col items-start">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.path}
                className="text-sm text-gray-600 cursor-pointer transition-colors hover:text-blue-600"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Show All Button */}
        <Link
          href={showAll}
          className="absolute bottom-4 flex items-center text-sm font-medium text-gray-700 transition-colors group hover:text-blue-600 cursor-pointer"
        >
          <span>Show all</span>
          <Icon
            icon="solar:alt-arrow-right-linear"
            className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
