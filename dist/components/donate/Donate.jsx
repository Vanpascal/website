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
const dialog_1 = require("@/components/ui/dialog");
const card_1 = require("@/components/ui/card");
const button_1 = require("@/components/ui/button");
const spinner_1 = __importDefault(require("../ui/spinner"));
const DonateForm_1 = __importDefault(require("./DonateForm"));
const Donate = () => {
    const [selectedMethod, setSelectedMethod] = (0, react_1.useState)("card");
    const [serverError, setServerError] = (0, react_1.useState)(null);
    const [transactionId, setTransactionId] = (0, react_1.useState)(null);
    const [dialogOpen, setDialogOpen] = (0, react_1.useState)(false);
    const [dialogMessage, setDialogMessage] = (0, react_1.useState)("Processing...");
    const [dialogStatus, setDialogStatus] = (0, react_1.useState)("processing");
    // Handle payment submission
    const handleSubmit = async (data) => {
        setServerError(null);
        setDialogOpen(true);
        setDialogStatus("processing");
        setDialogMessage("⏳ Processing your payment...");
        if (selectedMethod === "card") {
            alert("Card payments coming soon. Thank you!");
            setDialogOpen(false);
            return;
        }
        // Mobile money formatting
        let rawPhone = data.phone.trim();
        if (rawPhone.startsWith("255"))
            rawPhone = rawPhone.slice(3);
        else if (rawPhone.startsWith("0"))
            rawPhone = rawPhone.slice(1);
        if (!/^\d{9}$/.test(rawPhone)) {
            setServerError("Phone number must have 9 digits after trimming prefix.");
            setDialogOpen(false);
            return;
        }
        try {
            const res = await fetch("/api/mobile-payments/airtel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.assign(Object.assign({}, data), { phone: rawPhone })),
            });
            const result = await res.json();
            if (!res.ok) {
                setServerError(result.error || "Payment failed");
                setDialogMessage("❌ Error: " + (result.error || "Payment failed"));
                setDialogStatus("done");
                setTimeout(() => setDialogOpen(false), 3000);
                return;
            }
            setTransactionId(result.payment.mobilepayments.airtelTxnId);
            setDialogMessage("📲 Enter your Airtel PIN to complete payment...");
            setDialogStatus("pin");
        }
        catch (_a) {
            setServerError("Network error. Please try again.");
            setDialogMessage("❌ Network error.");
            setDialogStatus("done");
            setTimeout(() => setDialogOpen(false), 3000);
        }
    };
    return (<div className="bg-gray-50 min-h-screen">
      {/* Payment Dialog */}
      <dialog_1.Dialog open={dialogOpen}>
        <dialog_1.DialogContent className="text-center space-y-4">
          <dialog_1.DialogHeader>
            <dialog_1.DialogTitle>Processing Payment</dialog_1.DialogTitle>
          </dialog_1.DialogHeader>
          <spinner_1.default />
          <p className="text-sm text-gray-600">{dialogMessage}</p>
        </dialog_1.DialogContent>
      </dialog_1.Dialog>

      {/* Hero Banner */}
      <section className="relative">
        <div className="relative w-full h-80 md:h-[300px]">
          <image_1.default src="/images/long.jpg" alt="Donation Banner" fill style={{ objectFit: "cover" }}/>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
            Make a Donation
          </h1>
          <p className="text-yellow-400 mt-2 animate-fade-in delay-150">
            Support our mission by donating through your preferred payment
            method.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <div className="container mx-auto px-6 py-12 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:space-x-12 gap-10">
          {/* Why Donate */}
          <card_1.Card className="lg:w-1/2 bg-purple-50 hover:shadow-lg transition-shadow duration-300">
            <card_1.CardHeader>
              <card_1.CardTitle className="text-3xl text-purple-900">
                Why Donate?
              </card_1.CardTitle>
            </card_1.CardHeader>
            <card_1.CardContent className="space-y-4 text-gray-700">
              <p>
                Your generous donation helps us continue our mission to serve
                those in need.
              </p>
              <blockquote className="italic text-purple-700 border-l-4 border-purple-900 pl-4">
                &quot;Each of you should give what you have decided in your
                heart to give, not reluctantly or under compulsion, for God
                loves a cheerful giver.&quot; - 2 Corinthians 9:7
              </blockquote>
              <p>
                Thank you for supporting our work and joining us in creating a
                better future.
              </p>
            </card_1.CardContent>
          </card_1.Card>

          {/* Donation Form */}
          <div className="lg:w-1/2 space-y-6">
            {/* Payment Method Tabs */}
            <div className="flex justify-center space-x-4 mb-4">
              <button_1.Button variant={selectedMethod === "card" ? "default" : "outline"} onClick={() => setSelectedMethod("card")}>
                Pay with Card
              </button_1.Button>
              <button_1.Button variant={selectedMethod === "mobile" ? "default" : "outline"} onClick={() => setSelectedMethod("mobile")}>
                Pay with Mobile Money
              </button_1.Button>
            </div>

            <DonateForm_1.default selectedMethod={selectedMethod} setValue={() => { }} onSubmit={handleSubmit} serverError={serverError}/>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = Donate;
