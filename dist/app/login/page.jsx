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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const navigation_1 = require("next/navigation");
const authActions_1 = require("@/app/actions/authActions");
const Login = () => {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const router = (0, navigation_1.useRouter)(); // For navigation
    const handleLogin = async (event) => {
        var _a, _b;
        event.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            const result = await (0, authActions_1.loginUser)(formData);
            if (!result.success) {
                setError(((_b = (_a = result.errors) === null || _a === void 0 ? void 0 : _a.email) === null || _b === void 0 ? void 0 : _b[0]) || result.error || "Failed to login.");
                setLoading(false);
                return;
            }
            // Handle successful login
            console.log("Login successful:", result);
            router.push("/admin");
        }
        catch (error) {
            console.error("Error logging in:", error);
            setError("An unexpected error occurred.");
        }
        finally {
            setLoading(false); // Reset loading state
        }
    };
    return (<div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && (<p className="text-red-500 mb-4" aria-live="polite">
          {error}
        </p>)}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input type="email" id="email" value={email} onChange={(e) => {
            setEmail(e.target.value);
            setError(null); // Clear error on input change
        }} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500" required/>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input type="password" id="password" value={password} onChange={(e) => {
            setPassword(e.target.value);
            setError(null); // Clear error on input change
        }} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500" required/>
        </div>
        <button type="submit" className={`w-full py-2 px-4 rounded-md text-white transition ${loading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"}`} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>);
};
exports.default = Login;
