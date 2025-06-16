import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface SliderProps {
  children: React.ReactNode[];
  className?: string;
  itemsPerView?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };
  gap?: number;
  showNavigationButtons?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  children,
  className = "",
  itemsPerView = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 24,
  showNavigationButtons = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.default);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;

      if (width >= 1536 && itemsPerView["2xl"]) {
        setItemsToShow(itemsPerView["2xl"]);
      } else if (width >= 1280 && itemsPerView.xl) {
        setItemsToShow(itemsPerView.xl);
      } else if (width >= 1024 && itemsPerView.lg) {
        setItemsToShow(itemsPerView.lg);
      } else if (width >= 768 && itemsPerView.md) {
        setItemsToShow(itemsPerView.md);
      } else if (width >= 640 && itemsPerView.sm) {
        setItemsToShow(itemsPerView.sm);
      } else {
        setItemsToShow(itemsPerView.default);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [itemsPerView]);

  // Reset current index when items per view changes
  useEffect(() => {
    const maxIndex = Math.max(0, children.length - itemsToShow);
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [itemsToShow, children.length, currentIndex]);

  const maxIndex = Math.max(0, children.length - itemsToShow);
  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < maxIndex;

  const goLeft = () => {
    if (canGoLeft) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goRight = () => {
    if (canGoRight) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const itemWidth = containerRef.current
    ? (containerRef.current.offsetWidth - gap * (itemsToShow - 1)) / itemsToShow
    : 0;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="flex items-center">
        {/* Left Navigation Button */}
        {showNavigationButtons && (
          <button
            onClick={goLeft}
            disabled={!canGoLeft}
            className={`
              flex-shrink-0 w-12 h-12 rounded-full backdrop-blur-sm
              flex items-center justify-center mr-6
              transition-all duration-200 ease-in-out z-10 absolute left-4
              ${
                canGoLeft
                  ? "bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-xl border border-gray-200 cursor-pointer"
                  : "bg-gray-200/80 text-gray-400 cursor-not-allowed border border-gray-300"
              }
            `}
            aria-label="Previous items"
          >
            <Icon
              icon="solar:arrow-left-linear"
              className={`w-6 h-6 ${
                canGoLeft ? "text-blue-600" : "text-gray-400"
              }`}
            />
          </button>
        )}

        {/* Slider Container */}
        <div className="flex-1 overflow-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`,
            }}
          >
            {children.map((child, index) => (
              <div
                key={index}
                className={`flex-shrink-0 grid`}
                style={{
                  width: `${itemWidth}px`,
                  marginRight: index < children.length - 1 ? `${gap}px` : "0",
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        {showNavigationButtons && (
          <button
            onClick={goRight}
            disabled={!canGoRight}
            className={`
              flex-shrink-0 w-12 h-12 rounded-full backdrop-blur-sm
              flex items-center justify-center ml-6
              transition-all duration-200 ease-in-out z-10 absolute right-4
              ${
                canGoRight
                  ? "bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-xl border border-gray-200 cursor-pointer"
                  : "bg-gray-200/80 text-gray-400 cursor-not-allowed border border-gray-300"
              }
            `}
            aria-label="Next items"
          >
            <Icon
              icon="solar:arrow-right-linear"
              className={`w-6 h-6 ${
                canGoRight ? "text-blue-600" : "text-gray-400"
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Slider;
