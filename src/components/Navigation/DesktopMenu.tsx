
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { NavigationItem } from "@/config/navigation";

interface DesktopMenuProps {
  items: NavigationItem[];
}

export const DesktopMenu = ({ items }: DesktopMenuProps) => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      <div className="flex items-center space-x-8">
        {items.map((item, index) => (
          <div key={index}>
            {item.items ? (
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center">
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="grid grid-cols-2 gap-4 p-6">
                    {item.items.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
                        <div className="space-y-2">
                          {section.items?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href || "#"}
                              className="block text-sm text-gray-600 hover:text-orange-600"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to={item.href || "#"}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
