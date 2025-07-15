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
    <div className="bg-card rounded-lg p-6 shadow-sm border">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Globe className="w-5 h-5" />
          <span className="font-medium">Analyze Domain:</span>
        </div>
        <div className="flex-1 flex gap-3 max-w-md">
          <Input
            placeholder="Enter domain (e.g., example.com)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSearch} className="px-6">
            <Search className="w-4 h-4 mr-2" />
            Analyze
          </Button>
        </div>
      </div>
    </div>
  );
};