"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const documentActions_1 = require("@/app/actions/documentActions");
const fa_1 = require("react-icons/fa");
function DocumentCenter() {
    const [documents, setDocuments] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const getDocuments = async () => {
            try {
                const data = await (0, documentActions_1.fetchDocuments)();
                const formattedData = data.map((document) => ({
                    id: document.id,
                    title: document.title,
                    link: document.link ? document.link : "#", // Provide a default link if null
                    views: document.views,
                }));
                setDocuments(formattedData);
            }
            catch (error) {
                console.error("Error fetching documents:", error);
            }
        };
        getDocuments();
    }, []);
    const handleLinkClick = async (documentId) => {
        try {
            await (0, documentActions_1.recordView)(documentId);
        }
        catch (error) {
            console.error("Error recording view:", error);
        }
    };
    return (<div className="bg-white shadow-lg rounded-lg p-5 overflow-hidden">
      <h3 className="text-xl font-semibold text-purple-900 border-b-2 border-blue-800 pb-2 mb-5">
        Document Center
      </h3>
      <ul className="space-y-4">
        {documents.map((document, index) => (<li key={index} className="flex items-center">
            <fa_1.FaFilePdf className="text-red-600 mr-3" size={24}/>{" "}
            <a href={document.link} onClick={() => handleLinkClick(document.id)} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-800 break-words underline hover:text-blue-800">
              {document.title}
            </a>
          </li>))}
      </ul>
    </div>);
}
exports.default = DocumentCenter;
