import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSelect?: (value: string) => void;
  suggestions?: string[];
  className?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  clearable?: boolean;
  showSuggestions?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  onSelect,
  suggestions = [
    "logo",
    "logo design",
    "logo designer",
    "logo design & branding",
    "logo animation",
    "logo design graphic design",
    "logo design and branding",
    "logo branding",
  ],
  className = "",
  disabled = false,
  autoFocus = false,
  clearable = true,
  showSuggestions = true,
}) => {
  const [internalValue, setInternalValue] = useState(value || "logo");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Use controlled or uncontrolled value
  const searchTerm = value !== undefined ? value : internalValue;

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Update internal state if uncontrolled
    if (value === undefined) {
      setInternalValue(newValue);
    }

    // Call external onChange if provided
    onChange?.(newValue);

    setIsOpen(showSuggestions && newValue.length > 0);
    setSelectedIndex(-1);
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Update internal state if uncontrolled
    if (value === undefined) {
      setInternalValue(suggestion);
    }

    // Call external handlers
    onChange?.(suggestion);
    onSelect?.(suggestion);

    setIsOpen(false);
    setSelectedIndex(-1);
  };

  const handleClear = () => {
    const newValue = "";

    // Update internal state if uncontrolled
    if (value === undefined) {
      setInternalValue(newValue);
    }

    // Call external onChange if provided
    onChange?.(newValue);

    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || !showSuggestions) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(filteredSuggestions[selectedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleInputFocus = () => {
    if (
      showSuggestions &&
      filteredSuggestions.length > 0 &&
      searchTerm.length > 0
    ) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`w-full max-w-2xl mx-auto p-4 ${className}`}>
      <div className="relative" ref={inputRef}>
        {/* Search Input */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon icon="lucide:search" className="w-5 h-5" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={autoFocus}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
          {clearable && searchTerm && !disabled && (
            <button
              onClick={handleClear}
              className="p-[2px] rounded-full border border-gray-300 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors"
            >
              <Icon icon="lucide:x" className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Dropdown */}
        {isOpen &&
          showSuggestions &&
          filteredSuggestions.length > 0 &&
          !disabled && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
              {/* Header */}
              <div className="px-4 py-2 text-sm text-gray-500 bg-gray-50 border-b border-gray-100">
                Search Suggestions
              </div>

              {/* Suggestions */}
              <div className="py-1">
                {filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                      index === selectedIndex
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default SearchInput;
