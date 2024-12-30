import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resolution } from "@/types/resolution";
import { Clock, CheckCircle2, Circle, PlayCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface ResolutionCardProps {
  resolution: Resolution;
  onClick: (resolution: Resolution) => void;
}

const ResolutionCard = ({ resolution, onClick }: ResolutionCardProps) => {
  const getStatusIcon = () => {
    switch (resolution.status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <PlayCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-500" />;
    }
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <Card 
      className="hover:shadow-lg transition-all cursor-pointer bg-white/50 backdrop-blur-sm border border-neutral-200"
      onClick={() => onClick(resolution)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">{resolution.title}</CardTitle>
        {getStatusIcon()}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 mb-4 line-clamp-2">{resolution.description}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-neutral-500">
            <Clock className="w-4 h-4" />
            {formatTime(resolution.timeSpent)}
          </div>
          <span className="text-neutral-400">
            Created {formatDistanceToNow(resolution.createdAt)} ago
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResolutionCard;