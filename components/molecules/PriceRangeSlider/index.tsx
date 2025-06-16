import React, { useState, useRef, useCallback } from "react";
import Button from "../../atoms/Button";

interface PriceRangeSliderProps {
  minLimit: number;
  maxLimit: number;
  onClear: () => void;
  onApply: (minValue: number, maxValue: number) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  minLimit,
  maxLimit,
  onClear,
  onApply,
}) => {
  const [minValue, setMinValue] = useState(minLimit);
  const [maxValue, setMaxValue] = useState(maxLimit);
  const [isDragging, setIsDragging] = useState(null);
  const [showTooltip, setShowTooltip] = useState({ min: false, max: false });

  const sliderRef = useRef<any>(null);
  const minPrice = minLimit;
  const maxPrice = maxLimit;

  const formatValue = (value: number) => {
    if (value >= maxLimit) {
      return `$${(value / maxLimit).toFixed(0)}K+`;
    }
    return `$${value.toFixed(2)}`;
  };

  const getPercentage = (value: number) => {
    return ((value - minPrice) / (maxPrice - minPrice)) * 100;
  };

  const getValueFromPosition = (clientX: any) => {
    if (!sliderRef.current) return 0;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100)
    );
    return minPrice + (percentage / 100) * (maxPrice - minPrice);
  };

  const handleMouseDown = (thumb: any) => (e: any) => {
    setIsDragging(thumb);
    setShowTooltip({ min: thumb === "min", max: thumb === "max" });
    e.preventDefault();
  };

  const handleMouseMove = useCallback(
    (e: any) => {
      if (!isDragging) return;

      const newValue = Math.round(getValueFromPosition(e.clientX));

      if (isDragging === "min") {
        setMinValue(Math.min(newValue, maxValue - 1));
      } else if (isDragging === "max") {
        setMaxValue(Math.max(newValue, minValue + 1));
      }
    },
    [isDragging, minValue, maxValue]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
    setShowTooltip({ min: false, max: false });
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleInputChange = (type: any, value: any) => {
    const numValue = parseFloat(value) || 0;
    if (type === "min") {
      setMinValue(Math.max(minPrice, Math.min(numValue, maxValue - 1)));
    } else {
      setMaxValue(Math.min(maxPrice, Math.max(numValue, minValue + 1)));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-1">
      {/* Title */}
      <h3 className="mb-2 text-gray-800">Select range</h3>
      {/* Price labels */}
      <div className="flex justify-between text-sm text-gray-600 mb-6">
        <span className="py-1 px-2 border border-gray-300 rounded-md shadow-md">
          ${minValue}
        </span>
        <span className="py-1 px-2 border border-gray-300 rounded-md shadow-md">
          ${maxValue === maxLimit ? `1K+` : maxValue}
        </span>
      </div>

      {/* Slider container */}
      <div className="relative mb-8">
        <div
          ref={sliderRef}
          className="relative h-1 bg-gray-200 rounded-full cursor-pointer"
        >
          {/* Active range */}
          <div
            className="absolute h-1 bg-black rounded-full"
            style={{
              left: `${getPercentage(minValue)}%`,
              width: `${getPercentage(maxValue) - getPercentage(minValue)}%`,
            }}
          />

          {/* Min thumb */}
          <div
            className="absolute w-8 h-8 bg-black rounded-full cursor-grab transform -translate-y-3.5 -translate-x-0.5 hover:scale-110 transition-transform"
            style={{ left: `${getPercentage(minValue)}%` }}
            onMouseDown={handleMouseDown("min")}
          >
            {showTooltip.min && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                {formatValue(minValue)}
              </div>
            )}
          </div>

          {/* Max thumb */}
          <div
            className="absolute w-8 h-8 bg-black rounded-full cursor-grab transform -translate-y-3.5 -translate-x-8 hover:scale-110 transition-transform"
            style={{ left: `${getPercentage(maxValue)}%` }}
            onMouseDown={handleMouseDown("max")}
          >
            {showTooltip.max && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                {formatValue(maxValue)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Input fields */}
      <div className="flex justify-between gap-4">
        <div className="flex-1">
          <label className="block text-sm text-gray-600 mb-2">Min.</label>
          <input
            type="number"
            value={minValue}
            onChange={(e) => handleInputChange("min", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg transition-all duration-150 hover:outline-none hover:ring-2 hover:ring-black hover:border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-right"
            min={minPrice}
            max={maxPrice}
            step="0.01"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm text-gray-600 mb-2">Max.</label>
          <input
            type="number"
            value={maxValue}
            onChange={(e) => handleInputChange("max", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg transition-all duration-150 hover:outline-none hover:ring-2 hover:ring-black hover:border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-right"
            min={minPrice}
            max={maxPrice}
            step="0.01"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex items-center justify-between mt-6">
        <button
          className="text-blue-600 hover:text-blue-500 cursor-pointer text-sm py-[10px] px-4"
          onClick={() => {
            setMinValue(minLimit);
            setMaxValue(maxLimit);
            onClear();
          }}
        >
          Clear
        </button>
        <Button
          type="primary"
          label="Apply"
          size="medium"
          onClick={() => onApply(minValue, maxValue)}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
