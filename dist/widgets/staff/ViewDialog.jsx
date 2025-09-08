"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ViewDialog;
const alert_dialog_1 = require("@/components/ui/alert-dialog");
const button_1 = require("@/components/ui/button");
const fa_1 = require("react-icons/fa");
function ViewDialog({ title, desc, data }) {
    return (<alert_dialog_1.AlertDialog>
      <alert_dialog_1.AlertDialogTrigger asChild>
        <button_1.Button variant="ghost" className="h-10 w-10 p-0 hover:bg-gray-100 focus:outline-none transition-colors" title="View User">
          <fa_1.FaEye className="h-6 w-6 text-blue-500"/>
        </button_1.Button>
      </alert_dialog_1.AlertDialogTrigger>
      <alert_dialog_1.AlertDialogContent>
        <alert_dialog_1.AlertDialogHeader>
          <alert_dialog_1.AlertDialogTitle>{title}</alert_dialog_1.AlertDialogTitle>
          <alert_dialog_1.AlertDialogDescription>{desc}</alert_dialog_1.AlertDialogDescription>
        </alert_dialog_1.AlertDialogHeader>
        <div className="grid grid-cols-1 gap-4 p-4 bg-gray-50 rounded-md">
          {data.map((item, index) => (<div className="flex items-center justify-between" key={index}>
              <span className="font-semibold">{item.label}:</span>
              <span>{item.value}</span>
            </div>))}
        </div>
        <alert_dialog_1.AlertDialogFooter>
          <alert_dialog_1.AlertDialogCancel className="bg-blue-500 text-white hover:bg-blue-600">
            Close
          </alert_dialog_1.AlertDialogCancel>
        </alert_dialog_1.AlertDialogFooter>
      </alert_dialog_1.AlertDialogContent>
    </alert_dialog_1.AlertDialog>);
}
