import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResolutionCard from "@/components/ResolutionCard";
import { Resolution } from "@/types/resolution";

const Resolutions = () => {
  const [resolutions, setResolutions] = useState<Resolution[]>([
    {
      id: "1",
      title: "Learn a New Programming Language",
      description: "Master Python for data science and machine learning projects",
      targetDate: new Date("2025-12-31"),
      timeSpent: 120, // 2 hours
      category: "professional",
      status: "in-progress",
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-01")
    },
    {
      id: "2",
      title: "Exercise Regularly",
      description: "Work out at least 3 times a week and maintain a healthy lifestyle",
      targetDate: new Date("2025-12-31"),
      timeSpent: 360, // 6 hours
      category: "health",
      status: "in-progress",
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-01")
    }
  ]);

  const handleResolutionClick = (resolution: Resolution) => {
    console.log("Resolution clicked:", resolution);
    // TODO: Open resolution details modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 pt-20">
      <div className="container-padding max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">2025 Resolutions</h1>
            <p className="text-neutral-600">Track and achieve your goals for the year ahead</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Plus className="w-4 h-4 mr-2" />
            New Resolution
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resolutions.map((resolution) => (
            <ResolutionCard
              key={resolution.id}
              resolution={resolution}
              onClick={handleResolutionClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resolutions;