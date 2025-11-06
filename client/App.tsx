import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import MasterClass from "./pages/MasterClass";
import Gallery from "./pages/Gallery";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CourseDetail from "./pages/CoursesDetails";
import ErrorBoundary from "@/components/ErrorBoundary";
import WebinarPopup from "@/components/ui/webinar-popup";
import { WebinarPopupProvider, useWebinarPopupContext } from "@/contexts/WebinarPopupContext";

const queryClient = new QueryClient();

const AppContent = () => {
  const { showPopup, closePopup } = useWebinarPopupContext();

  return (
    <>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/courses" element={<Programs />} />
                <Route path="/master-class" element={<MasterClass />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
      {showPopup && (
        <WebinarPopup key="webinar-popup" onClose={closePopup} />
      )}
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <WebinarPopupProvider>
            <AppContent />
          </WebinarPopupProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

createRoot(document.getElementById("root")!).render(<App />);
