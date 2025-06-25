import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { NavigationItem } from "@/config/navigation";

interface DesktopMenuProps {
  items: NavigationItem[];
}

export const DesktopMenu = ({ items }: DesktopMenuProps) => {
  const renderAdLibraryDropdown = (adLibrarySection: NavigationItem) => {
    const itemsPerColumn = Math.ceil((adLibrarySection.items?.length || 0) / 2);
    const firstColumn = adLibrarySection.items?.slice(0, itemsPerColumn) || [];
    const secondColumn = adLibrarySection.items?.slice(itemsPerColumn) || [];

    return (
      <div className="absolute left-0 mt-2 w-[500px] bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-6">
          <Link
            to={adLibrarySection.href!}
            className="font-semibold text-gray-900 mb-4 flex items-center hover:text-orange-600 transition-colors text-lg"
          >
            {adLibrarySection.title}
          </Link>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              {firstColumn.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={subItem.href || "#"}
                  className="block text-sm text-gray-600 hover:text-orange-600 py-1"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              {secondColumn.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={subItem.href || "#"}
                  className="block text-sm text-gray-600 hover:text-orange-600 py-1"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFeaturesDropdown = (item: NavigationItem) => {
    const adLibrarySection = item.items?.find(section => section.title === "Ad Library");
    const otherSections = item.items?.filter(section => section.title !== "Ad Library") || [];

    return (
      <div className="absolute left-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="grid grid-cols-3 gap-6 p-6">
          {/* Ad Library with two sub-columns */}
          {adLibrarySection && (
            <div className="col-span-2">
              <Link
                to={adLibrarySection.href!}
                className="font-semibold text-gray-900 mb-3 flex items-center hover:text-orange-600 transition-colors"
              >
                {adLibrarySection.title}
              </Link>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  {adLibrarySection.items?.slice(0, 5).map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.href || "#"}
                      className="block text-sm text-gray-600 hover:text-orange-600"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  {adLibrarySection.items?.slice(5).map((subItem, subIndex) => (
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
            </div>
          )}

          {/* Other sections */}
          <div className="space-y-6">
            {otherSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <Link
                  to={section.href!}
                  className="font-semibold text-gray-900 mb-3 flex items-center hover:text-orange-600 transition-colors"
                >
                  {section.title}
                </Link>
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
    );
  };

  const renderSolutionsDropdown = (item: NavigationItem) => {
    return (
      <div className="absolute left-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="grid grid-cols-4 gap-4 p-6">
          {item.items?.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.href ? (
                <Link
                  to={section.href}
                  className="font-semibold text-gray-900 mb-3 flex items-center hover:text-orange-600 transition-colors"
                >
                  {section.title}
                </Link>
              ) : (
                <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
              )}
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
    );
  };

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
                {item.title === "Features" && renderFeaturesDropdown(item)}
                {item.title === "Solutions" && renderSolutionsDropdown(item)}
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
