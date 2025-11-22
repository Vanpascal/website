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
const image_1 = __importDefault(require("next/image"));
const staffActions_1 = require("@/app/actions/staffActions");
const ManagementAndStaff = () => {
    const [staffMembers, setStaffMembers] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const getEmployees = async () => {
            try {
                const employees = await (0, staffActions_1.fetchEmployees)();
                setStaffMembers(employees);
            }
            catch (error) {
                console.error("Error fetching employees:", error);
            }
        };
        getEmployees();
    }, []);
    return (<div className="py-10 bg-gray-100">
      {/* Banner Section */}
      <section className="relative">
        <div className="relative w-full h-80 md:h-[400px]">
          <image_1.default src="/images/about.jpg" alt="About Us Banner" fill style={{ objectFit: "cover" }}/>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            The DBYTC Management Staff
          </h1>
        </div>
      </section>

      {/* Staff Members Grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {staffMembers.map((member) => (<div key={member.id} className="bg-white p-6 rounded-lg border shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-full aspect-square relative">
                <image_1.default src={member.photo || "/images/default.jpg"} alt={`${member.firstname} ${member.lastname}`} fill style={{ objectFit: "cover" }} className="rounded-md border"/>
              </div>
              <h3 className="text-2xl font-semibold text-purple-900 mt-4">
                {member.firstname} {member.lastname}
              </h3>
              <p className="text-lg text-gray-700 mt-1">
                {member.position || "Position not assigned"}
              </p>
            </div>))}
        </div>
      </div>
    </div>);
};
exports.default = ManagementAndStaff;
