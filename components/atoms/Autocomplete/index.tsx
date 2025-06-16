import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

export interface IAutocompleteOption {
  id: string;
  label: string;
  category?: string;
}

interface AutocompleteProps {
  options: IAutocompleteOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSelect?: (option: IAutocompleteOption) => void;
  noResultsText?: string;
  className?: string;
  maxResults?: number;
  showClearButton?: boolean;
  loading?: boolean;
  loadingText?: string;
  onSearch?: (query: string) => void;
  debounceMs?: number;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  placeholder = "Search...",
  value = "",
  onChange,
  onSelect,
  noResultsText = "No results found",
  className = "",
  maxResults = 10,
  showClearButton = true,
  loading = false,
  loadingText = "Searching...",
  onSearch,
  debounceMs = 300,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<IAutocompleteOption[]>(
    []
  );
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<any>(null);

  // Filter options based on input with debouncing
  useEffect(() => {
    // Clear previous debounce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (!inputValue.trim()) {
      setFilteredOptions([]);
      setIsOpen(false);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    setIsOpen(true);

    // Debounce the search
    debounceRef.current = setTimeout(() => {
      if (onSearch) {
        // External search function provided
        onSearch(inputValue);
      } else {
        // Local filtering
        const filtered = options
          .filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
          )
          .slice(0, maxResults);

        setFilteredOptions(filtered);
      }
      setIsSearching(false);
      setHighlightedIndex(-1);
    }, debounceMs);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [inputValue, options, maxResults, onSearch, debounceMs]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  // Handle option selection
  const handleOptionSelect = (option: IAutocompleteOption) => {
    setInputValue(option.label);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
    if (onChange) {
      onChange(option.label);
    }
  };

  // Handle clear button
  const handleClear = () => {
    setInputValue("");
    setIsOpen(false);
    setIsSearching(false);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    if (onChange) {
      onChange("");
    }
    inputRef.current?.focus();
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
          handleOptionSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Group options by category
  const groupedOptions = filteredOptions.reduce((acc, option) => {
    const category = option.category || "default";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(option);
    return acc;
  }, {} as Record<string, IAutocompleteOption[]>);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Input field */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full px-4 py-2 pr-10 border border-gray-400 rounded-lg text-sm hover:ring-2 hover:ring-black hover:border-transparent focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none duration-150"
        />

        {/* Clear button or loading spinner */}
        {inputValue && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {isSearching || loading ? (
              <Icon icon="svg-spinners:ring-resize" className="w-5 h-5" />
            ) : showClearButton ? (
              <button
                className="p-[2px] rounded-full ring-1 ring-black mr-2 cursor-pointer"
                onClick={handleClear}
              >
                <Icon icon="mdi:times" className="w-3 h-3" />
              </button>
            ) : null}
          </div>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
          {isSearching || loading ? (
            <div className="flex items-center px-4 py-3 text-sm gap-2">
              <Icon icon="svg-spinners:ring-resize" className="w-5 h-5" />
              {loadingText}
            </div>
          ) : filteredOptions.length === 0 ? (
            <div className="flex items-center px-4 py-3 text-sm gap-2">
              <Icon icon="hugeicons:bubble-chat-question" className="w-5 h-5" />
              {noResultsText}
            </div>
          ) : (
            <div>
              {Object.entries(groupedOptions).map(
                ([category, categoryOptions]) => (
                  <div key={category}>
                    {/* Category header */}
                    {category !== "default" && (
                      <div className="px-4 py-2 text-xs font-medium uppercase tracking-wide bg-gray-50 border-b border-gray-100">
                        {category}
                      </div>
                    )}

                    {/* Options */}
                    {categoryOptions.map((option, index) => {
                      const globalIndex = filteredOptions.indexOf(option);
                      return (
                        <div
                          key={option.id}
                          onClick={() => handleOptionSelect(option)}
                          className={`px-4 py-3 cursor-pointer transition-colors hover:bg-gray-50 ${
                            highlightedIndex === globalIndex
                              ? "bg-gray-100"
                              : ""
                          }`}
                        >
                          <div className="text-sm text-gray-800">
                            {option.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
