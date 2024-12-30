import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Target } from "lucide-react";
import { Resolution } from "@/types/resolution";
import { formatDistanceToNow, format } from "date-fns";

interface ResolutionCardProps {
  resolution: Resolution;
}

const ResolutionCard = ({ resolution }: ResolutionCardProps) => {
  const getStatusColor = (status: Resolution['status']) => {
    switch (status) {
      case 'not-started':
        return 'bg-neutral-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'completed':
        return 'bg-green-500';
      default:
        return 'bg-neutral-500';
    }
  };

  const formatTimeSpent = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-neutral-800">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{resolution.title}</CardTitle>
            <CardDescription className="mt-2">{resolution.description}</CardDescription>
          </div>
          <Badge className={`${getStatusColor(resolution.status)} text-white`}>
            {resolution.status.replace('-', ' ')}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Time Spent: {formatTimeSpent(resolution.timeSpent)}</span>
            </div>
            <Badge variant="outline">{resolution.category}</Badge>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <Calendar className="w-4 h-4" />
            <span>Started: {format(resolution.startDate, 'MMM d, yyyy')}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <Target className="w-4 h-4" />
            <span>Target: {format(resolution.targetDate, 'MMM d, yyyy')}</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{resolution.progress}%</span>
            </div>
            <Progress value={resolution.progress} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResolutionCard;