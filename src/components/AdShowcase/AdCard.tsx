
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Ad {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

interface AdCardProps {
  ad: Ad;
}

export const AdCard = ({ ad }: AdCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'fitness':
        return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'outdoor':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
      case 'retail':
        return 'bg-purple-100 text-purple-700 hover:bg-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group">
      <div className="relative overflow-hidden">
        <img 
          src={ad.image} 
          alt={ad.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge 
            variant="secondary" 
            className={`${getCategoryColor(ad.category)} border-0 font-medium`}
          >
            {ad.category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
          {ad.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-gray-600 leading-relaxed">
          {ad.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
