
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { NavigationItem } from "@/config/navigation";

interface MobileMenuProps {
  items: NavigationItem[];
  onLinkClick: () => void;
}

export const MobileMenu = ({ items, onLinkClick }: MobileMenuProps) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index}>
          {item.items ? (
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 text-left font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors">
                <span>{item.title}</span>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-2">
                {item.items.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border-l-2 border-gray-200 pl-4 space-y-2 mt-4">
                    <p className="text-sm font-semibold text-gray-900">{section.title}</p>
                    {section.items?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href || "#"}
                        className="block py-1 px-2 text-sm text-gray-600 hover:text-orange-600"
                        onClick={onLinkClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <Link
              to={item.href || "#"}
              className="block py-2 px-4 font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={onLinkClick}
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
