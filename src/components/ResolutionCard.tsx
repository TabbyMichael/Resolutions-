import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Target, Pencil, Trash2, CheckCircle2 } from "lucide-react";
import { Resolution } from "@/types/resolution";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

interface ResolutionCardProps {
  resolution: Resolution;
  onEdit: (resolution: Resolution) => void;
  onDelete: (id: string) => void;
}

const ResolutionCard = ({ resolution, onEdit, onDelete }: ResolutionCardProps) => {
  const getStatusColor = (status: Resolution['status']) => {
    switch (status) {
      case 'not-started':
        return 'bg-neutral-500';
      case 'in-progress':
        return 'bg-primary';
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
    <Card className="group hover:shadow-md transition-all duration-200 bg-white border-neutral-200">
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-neutral-400 hover:text-primary cursor-pointer transition-colors" />
              <div>
                <h3 className="text-lg font-medium text-neutral-800">{resolution.title}</h3>
                <p className="text-sm text-neutral-600 mt-1">{resolution.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(resolution)}
                className="h-8 w-8 text-neutral-500 hover:text-primary"
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(resolution.id)}
                className="h-8 w-8 text-neutral-500 hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{formatTimeSpent(resolution.timeSpent)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(resolution.startDate, 'MMM d')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>{format(resolution.targetDate, 'MMM d')}</span>
            </div>
            <Badge variant="outline" className="ml-auto">
              {resolution.category}
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-neutral-600">
              <span>Progress</span>
              <span>{resolution.progress}%</span>
            </div>
            <Progress 
              value={resolution.progress} 
              className="h-1.5 bg-neutral-100"
              indicatorClassName="bg-primary"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResolutionCard;