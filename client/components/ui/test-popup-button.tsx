/**
 * Development helper component to test the popup
 * Add this temporarily to any page to test the popup
 * Remove this file in production
 */
import { Button } from "@/components/ui/button";

export default function TestPopupButton({ onClick }: { onClick: () => void }) {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[200]">
      <Button
        onClick={() => {
          sessionStorage.removeItem("webinar-popup-shown");
          onClick();
        }}
        className="bg-primary text-primary-foreground"
      >
        Test Popup
      </Button>
    </div>
  );
}

