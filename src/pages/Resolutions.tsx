import { useState } from "react";
import ResolutionCard from "@/components/ResolutionCard";
import { Resolution } from "@/types/resolution";

const Resolutions = () => {
  const [resolutions] = useState<Resolution[]>([
    {
      id: "1",
      title: "Learn a New Programming Language",
      description: "Master Python through online courses and personal projects",
      category: "Education",
      startDate: new Date(2025, 0, 1),
      targetDate: new Date(2025, 11, 31),
      timeSpent: 2400, // 40 hours
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
      timeSpent: 3600, // 60 hours
      status: "in-progress",
      progress: 30,
    },
    // Add more sample resolutions as needed
  ]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
              2025 Resolutions
            </h1>
            <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors">
              Add Resolution
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resolutions.map((resolution) => (
              <ResolutionCard key={resolution.id} resolution={resolution} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resolutions;