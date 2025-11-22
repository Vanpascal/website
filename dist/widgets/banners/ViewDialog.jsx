"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ViewDialog;
const button_1 = require("@/components/ui/button");
const fa_1 = require("react-icons/fa");
function ViewDialog({ documentUrl, title = "View Document", }) {
    const handleViewDocument = () => {
        if (documentUrl) {
            window.open(documentUrl, "_blank");
        }
    };
    return (<button_1.Button variant="ghost" className="h-10 w-10 p-0 hover:bg-blue-200 focus:outline-none transition-colors" title={title} onClick={handleViewDocument}>
      <fa_1.FaEye className="h-6 w-6 text-blue-500"/>
    </button_1.Button>);
}
