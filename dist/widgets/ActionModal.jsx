"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ActionModal;
const alert_dialog_1 = require("@/components/ui/alert-dialog");
function ActionModal({ children, open, trigger, title, desc, btnText, onClick, setOpen, }) {
    return (<alert_dialog_1.AlertDialog open={open} onOpenChange={setOpen}>
      <alert_dialog_1.AlertDialogTrigger asChild>{trigger}</alert_dialog_1.AlertDialogTrigger>
      <alert_dialog_1.AlertDialogContent>
        <alert_dialog_1.AlertDialogHeader>
          <alert_dialog_1.AlertDialogTitle>{title}</alert_dialog_1.AlertDialogTitle>
          <alert_dialog_1.AlertDialogDescription>{desc}</alert_dialog_1.AlertDialogDescription>
        </alert_dialog_1.AlertDialogHeader>
        {children}
        <alert_dialog_1.AlertDialogFooter>
          <alert_dialog_1.AlertDialogCancel>Cancel</alert_dialog_1.AlertDialogCancel>
          {btnText && (<alert_dialog_1.AlertDialogAction onClick={onClick}>{btnText}</alert_dialog_1.AlertDialogAction>)}
        </alert_dialog_1.AlertDialogFooter>
      </alert_dialog_1.AlertDialogContent>
    </alert_dialog_1.AlertDialog>);
}
