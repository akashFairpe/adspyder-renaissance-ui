import { useState } from "react";
import { Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DomainSearchBarProps {
  selectedDomain: string;
  onDomainChange: (domain: string) => void;
}

export const DomainSearchBar = ({ selectedDomain, onDomainChange }: DomainSearchBarProps) => {
  const [inputValue, setInputValue] = useState(selectedDomain);

  const handleSearch = () => {
    if (inputValue.trim()) {
      onDomainChange(inputValue.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 max-w-2xl w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Globe className="w-5 h-5 text-primary" />
          <span className="font-medium">Analyze Domain:</span>
        </div>
        <div className="flex-1 w-full sm:max-w-md flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Enter domain (e.g., example.com)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border-gray-300 focus:ring-primary focus:border-primary"
          />
          <Button 
            onClick={handleSearch} 
            className="w-full sm:w-auto px-6 bg-primary hover:bg-primary/90 text-white font-semibold"
          >
            <Search className="w-4 h-4 mr-2" />
            Analyze
          </Button>
        </div>
      </div>
    </div>
  );
};