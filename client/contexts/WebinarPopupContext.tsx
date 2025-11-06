import { createContext, useContext, ReactNode } from "react";
import { useWebinarPopup } from "@/hooks/use-webinar-popup";

interface WebinarPopupContextType {
  openPopup: () => void;
  closePopup: () => void;
  showPopup: boolean;
}

const WebinarPopupContext = createContext<WebinarPopupContextType | undefined>(undefined);

export function WebinarPopupProvider({ children }: { children: ReactNode }) {
  const { showPopup, closePopup, openPopup } = useWebinarPopup();

  return (
    <WebinarPopupContext.Provider value={{ openPopup, closePopup, showPopup }}>
      {children}
    </WebinarPopupContext.Provider>
  );
}

export function useWebinarPopupContext() {
  const context = useContext(WebinarPopupContext);
  if (context === undefined) {
    throw new Error("useWebinarPopupContext must be used within a WebinarPopupProvider");
  }
  return context;
}


