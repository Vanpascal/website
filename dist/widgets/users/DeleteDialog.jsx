"use strict";
// DeleteDialog.tsx
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteDialog;
const alert_dialog_1 = require("@/components/ui/alert-dialog");
const fa_1 = require("react-icons/fa");
const button_1 = require("@/components/ui/button");
function DeleteDialog({ title, desc, onConfirm, }) {
    return (<alert_dialog_1.AlertDialog>
      <alert_dialog_1.AlertDialogTrigger asChild>
        <button_1.Button variant="ghost" className="h-10 w-10 p-0 hover:bg-red-100 focus:outline-none transition-colors" title={title}>
          <fa_1.FaTrash className="h-6 w-6 text-red-500"/>
        </button_1.Button>
      </alert_dialog_1.AlertDialogTrigger>
      <alert_dialog_1.AlertDialogContent>
        <alert_dialog_1.AlertDialogHeader>
          <alert_dialog_1.AlertDialogTitle>{title}</alert_dialog_1.AlertDialogTitle>
          <alert_dialog_1.AlertDialogDescription>{desc}</alert_dialog_1.AlertDialogDescription>
        </alert_dialog_1.AlertDialogHeader>
        <alert_dialog_1.AlertDialogFooter>
          <alert_dialog_1.AlertDialogCancel>Cancel</alert_dialog_1.AlertDialogCancel>
          <alert_dialog_1.AlertDialogAction onClick={onConfirm} className="bg-red-500 hover:bg-red-400">
            Delete
          </alert_dialog_1.AlertDialogAction>
        </alert_dialog_1.AlertDialogFooter>
      </alert_dialog_1.AlertDialogContent>
    </alert_dialog_1.AlertDialog>);
}
