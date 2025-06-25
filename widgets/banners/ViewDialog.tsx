import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";

interface ViewDialogProps {
  documentUrl?: string; // The URL of the document to open
  title?: string; // Optional title for the button or tooltip
}

export default function ViewDialog({
  documentUrl,
  title = "View Document",
}: ViewDialogProps) {
  const handleViewDocument = () => {
    if (documentUrl) {
      window.open(documentUrl, "_blank");
    }
  };

  return (
    <Button
      variant="ghost"
      className="h-10 w-10 p-0 hover:bg-blue-200 focus:outline-none transition-colors"
      title={title}
      onClick={handleViewDocument}
    >
      <FaEye className="h-6 w-6 text-blue-500" />
    </Button>
  );
}
