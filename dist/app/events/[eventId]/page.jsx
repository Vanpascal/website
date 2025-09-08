"use strict";
"use client";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const link_1 = __importDefault(require("next/link"));
const fa_1 = require("react-icons/fa");
const recentUpdatesActions_1 = require("@/app/actions/recentUpdatesActions");
const Header_1 = __importDefault(require("@/components/Header"));
const Footer_1 = __importDefault(require("@/components/Footer"));
const image_1 = __importDefault(require("next/legacy/image"));
const head_1 = __importDefault(require("next/head"));
const UpdateDetails = ({ params }) => {
    const [update, setUpdate] = (0, react_1.useState)(null);
    const [otherUpdates, setOtherUpdates] = (0, react_1.useState)([]);
    const [eventId, setEventId] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const unwrapParams = async () => {
            const unwrappedParams = await params;
            setEventId(unwrappedParams.eventId);
        };
        unwrapParams();
    }, [params]);
    (0, react_1.useEffect)(() => {
        if (!eventId)
            return;
        const getUpdateDetails = async () => {
            var _a;
            try {
                const data = await (0, recentUpdatesActions_1.fetchRecentUpdate)();
                const updateData = data.find((update) => update.id === parseInt(eventId));
                if (updateData) {
                    const formattedData = {
                        id: updateData.id,
                        title: updateData.title,
                        date: new Date(updateData.createdAt).toLocaleDateString(),
                        img: updateData.photo
                            ? updateData.photo
                            : "/images/default-image.png",
                        content: (_a = updateData.content) !== null && _a !== void 0 ? _a : "No content available",
                    };
                    setUpdate(formattedData);
                }
                const formattedOtherUpdates = data
                    .filter((update) => update.id !== parseInt(eventId))
                    .map((update) => {
                    var _a;
                    return ({
                        id: update.id,
                        title: update.title,
                        date: new Date(update.createdAt).toLocaleDateString(),
                        img: update.photo ? update.photo : "/images/default-image.png",
                        content: (_a = update.content) !== null && _a !== void 0 ? _a : "No content available",
                    });
                });
                setOtherUpdates(formattedOtherUpdates);
            }
            catch (error) {
                console.error("Error fetching update details:", error);
            }
        };
        getUpdateDetails();
    }, [eventId]);
    if (!update) {
        return (<div className="min-h-screen flex justify-center items-center">
        <p className="text-lg text-gray-700">Loading update details...</p>
      </div>);
    }
    return (<>
      <head_1.default>
        <title>{update.title} | DBYTC Updates</title>
        <meta name="description" content={update.content.slice(0, 150)}/>
        <meta property="og:title" content={update.title}/>
        <meta property="og:description" content={update.content.slice(0, 150)}/>
        <meta property="og:image" content={update.img}/>
        <meta property="og:url" content={`https://donboscoiringa.org/events/${update.id}`}/>
        <meta property="og:type" content="article"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={update.title}/>
        <meta name="twitter:description" content={update.content.slice(0, 150)}/>
        <meta name="twitter:image" content={update.img}/>
      </head_1.default>

      <Header_1.default />
      <div className="container mx-auto min-h-screen flex flex-col pt-14 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 shadow-lg rounded-lg p-6 md:p-10">
            {/* Image Section */}
            <div className="w-full mb-6 md:mb-10">
              <div className="relative overflow-hidden rounded-lg shadow-lg h-96 md:h-[600px]">
                <image_1.default src={update.img} alt={update.title} layout="fill" objectFit="cover" className="w-full h-full object-cover"/>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-purple-900 mb-4 text-center">
                {update.title}
              </h1>
              <p className="text-sm text-gray-600 flex items-center justify-center mb-6">
                <fa_1.FaCalendarAlt className="mr-2 text-purple-600"/>
                Posted On: {update.date}
              </p>
              <div className="text-gray-800 leading-relaxed text-justify whitespace-pre-wrap">
                {update.content}
              </div>
            </div>
          </div>

          {/* Other Updates Section */}
          <div className="lg:w-1/4 pt-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              Other Updates
            </h2>
            <ul className="space-y-4">
              {otherUpdates.map((update) => (<li key={update.id} className="border-b pb-4">
                  <link_1.default href={`/events/${update.id}`} legacyBehavior>
                    <a className="text-lg text-blue-600 hover:text-blue-800">
                      {update.title}
                    </a>
                  </link_1.default>
                  <p className="text-sm text-gray-600 flex items-center">
                    <fa_1.FaCalendarAlt className="mr-2 text-purple-600"/>
                    Posted On: {update.date}
                  </p>
                </li>))}
            </ul>
          </div>
        </div>
      </div>
      <Footer_1.default />
    </>);
};
exports.default = UpdateDetails;
