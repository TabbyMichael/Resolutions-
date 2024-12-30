import { useState } from "react";
import ResolutionCard from "@/components/ResolutionCard";
import ResolutionDialog from "@/components/ResolutionDialog";
import { Resolution } from "@/types/resolution";
import { useToast } from "@/components/ui/use-toast";
import { Plus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Resolutions = () => {
  const { toast } = useToast();
  const [resolutions, setResolutions] = useState<Resolution[]>([
    {
      id: "1",
      title: "Learn a New Programming Language",
      description: "Master Python through online courses and personal projects",
      category: "Education",
      startDate: new Date(2025, 0, 1),
      targetDate: new Date(2025, 11, 31),
      timeSpent: 2400,
      status: "in-progress",
      progress: 45,
    },
    {
      id: "2",
      title: "Exercise Regularly",
      description: "Maintain a consistent workout routine 3 times per week",
      category: "Health",
      startDate: new Date(2025, 0, 1),
      targetDate: new Date(2025, 11, 31),
      timeSpent: 3600,
      status: "in-progress",
      progress: 30,
    },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedResolution, setSelectedResolution] = useState<Resolution | undefined>();
  const [resolutionToDelete, setResolutionToDelete] = useState<string | undefined>();

  const handleAddResolution = (data: Partial<Resolution>) => {
    const newResolution: Resolution = {
      id: Date.now().toString(),
      title: data.title || "",
      description: data.description || "",
      category: data.category || "",
      startDate: data.startDate || new Date(),
      targetDate: data.targetDate || new Date(),
      timeSpent: data.timeSpent || 0,
      status: data.status || "not-started",
      progress: data.progress || 0,
    };
    setResolutions([...resolutions, newResolution]);
  };

  const handleEditResolution = (data: Partial<Resolution>) => {
    if (!selectedResolution) return;
    
    const updatedResolutions = resolutions.map((resolution) =>
      resolution.id === selectedResolution.id
        ? { ...resolution, ...data }
        : resolution
    );
    setResolutions(updatedResolutions);
    setSelectedResolution(undefined);
  };

  const handleDelete = (id: string) => {
    setResolutionToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (!resolutionToDelete) return;
    
    const updatedResolutions = resolutions.filter(
      (resolution) => resolution.id !== resolutionToDelete
    );
    setResolutions(updatedResolutions);
    setDeleteDialogOpen(false);
    setResolutionToDelete(undefined);
    
    toast({
      title: "Resolution Deleted",
      description: "The resolution has been successfully deleted.",
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-neutral-800">Today's Resolutions</h1>
              <p className="text-neutral-600 mt-1">Track and manage your goals for 2025</p>
            </div>
            <button
              onClick={() => {
                setSelectedResolution(undefined);
                setDialogOpen(true);
              }}
              className="flex items-center gap-2 bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Resolution
            </button>
          </div>
          
          <div className="space-y-4">
            {resolutions.map((resolution) => (
              <ResolutionCard
                key={resolution.id}
                resolution={resolution}
                onEdit={(resolution) => {
                  setSelectedResolution(resolution);
                  setDialogOpen(true);
                }}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>

      <ResolutionDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={selectedResolution ? handleEditResolution : handleAddResolution}
        initialData={selectedResolution}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              resolution.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="bg-destructive hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Resolutions;