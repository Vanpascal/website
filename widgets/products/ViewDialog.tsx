import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";

interface ViewDialogProps {
  title: string;
  desc: string;
  data: { label: string; value: string }[];
}

export default function ViewDialog({ title, desc, data }: ViewDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-10 w-10 p-0 hover:bg-gray-100 focus:outline-none transition-colors"
          title="View User"
        >
          <FaEye className="h-6 w-6 text-blue-500" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid grid-cols-1 gap-4 p-4 bg-gray-50 rounded-md">
          {data.map((item, index) => (
            <div className="flex items-center justify-between" key={index}>
              <span className="font-semibold">{item.label}:</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-blue-500 text-white hover:bg-blue-600">
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
