import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Main from "./containers/Main";
import { StyleProvider } from "./contexts/StyleContext";
import { useThemeStore } from "./stores/themeStore";

// Lazy-load KnowledgeShelf pages so initial Portfolio load stays fast
const ShelfHome = lazy(() => import("./pages/Home"));
const TechnologyPage = lazy(() => import("./pages/TechnologyPage"));

function ScrollToTopOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      const container = document.getElementById("main-scroll-container");
      if (container) {
        container.scrollTo(0, 0);
      }
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

const PageFallback = () => (
  <div className="h-full min-h-[60vh] flex items-center justify-center text-gray-400 font-mono text-sm">
    Loading module...
  </div>
);

function App() {
  const isDark = useThemeStore((state) => state.isDark);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <StyleProvider value={{ isDark, changeTheme: toggleTheme }}>
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <Routes>
          {/* Unified Sidebar Shell across Portfolio & KnowledgeShelf */}
          <Route path="/" element={<Layout />}>
            {/* Default Route: Portfolio (opened by default at top of sidebar) */}
            <Route index element={<Main />} />

            {/* KnowledgeShelf Catalog & Deep-Dive Modules */}
            <Route
              path="shelf"
              element={
                <Suspense fallback={<PageFallback />}>
                  <ShelfHome />
                </Suspense>
              }
            />
            <Route
              path="shelf/:category/:technologyId"
              element={
                <Suspense fallback={<PageFallback />}>
                  <TechnologyPage />
                </Suspense>
              }
            />

            {/* Direct /:category/:technologyId support inside the same shell */}
            <Route
              path=":category/:technologyId"
              element={
                <Suspense fallback={<PageFallback />}>
                  <TechnologyPage />
                </Suspense>
              }
            />

            {/* Legacy & Convenience Redirects */}
            <Route path="learn" element={<Navigate to="/shelf" replace />} />
            <Route
              path="kafka"
              element={<Navigate to="/shelf/data-engineering/kafka" replace />}
            />
            <Route
              path="spark"
              element={<Navigate to="/shelf/data-engineering/spark" replace />}
            />
            <Route
              path="sql"
              element={<Navigate to="/shelf/databases/sql" replace />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
}

export default App;
