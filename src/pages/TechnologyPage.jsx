import React, { useEffect, useState, Suspense } from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import { Code, AlertTriangle } from "lucide-react";
import { getTechnologyById } from "../config/technologies";
import { componentRegistry } from "../config/componentRegistry";

const TechnologyPage = () => {
  const { technologyId } = useParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("docs");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");
    if (tab === "playground") {
      setActiveTab("playground");
    } else {
      setActiveTab("docs");
    }
  }, [location.search]);

  const tech = getTechnologyById(technologyId);

  useEffect(() => {
    if (tech && !tech.hasVisualizer && activeTab !== "docs") {
      setActiveTab("docs");
    }
  }, [tech, activeTab]);

  if (!tech) {
    return <Navigate to="/shelf" replace />;
  }

  const DocComponent = componentRegistry[tech.docComponent];

  const getVisualizerComponent = () => {
    if (tech.id === "kafka") {
      return componentRegistry.KafkaArchitecture;
    }
    return null;
  };

  const VisualizerComponent = getVisualizerComponent();

  return (
    <div className="flex flex-col h-full bg-gray-950">
      <div className="flex-1 min-h-0 overflow-hidden relative">
        <Suspense
          fallback={
            <div className="h-full flex items-center justify-center text-gray-400">
              <div className="flex flex-col items-center gap-4 animate-pulse">
                <div className="w-16 h-16 bg-gray-800 rounded-full opacity-50"></div>
                <div className="h-4 w-48 bg-gray-800 rounded opacity-50"></div>
              </div>
            </div>
          }
        >
          {activeTab === "docs" ? (
            DocComponent ? (
              <div className="h-full overflow-y-auto custom-scrollbar bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-full">
                  <DocComponent />
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                <div className="text-center p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
                  <AlertTriangle size={48} className="mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">
                    Coming Soon
                  </h3>
                  <p className="max-w-md mx-auto">
                    The documentation for {tech.name} is currently being authored.
                    Check back shortly.
                  </p>
                </div>
              </div>
            )
          ) : VisualizerComponent ? (
            <div className="h-full w-full bg-gray-900">
              <VisualizerComponent />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              <div className="text-center p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
                <Code size={64} className="mx-auto mb-4 text-gray-600" />
                <h2 className="text-2xl font-bold text-white mb-2">
                  Visualizer
                </h2>
                <p className="text-gray-400">
                  Interactive visualization module is under construction.
                </p>
              </div>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default TechnologyPage;
