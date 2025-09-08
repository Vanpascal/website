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
const react_hook_form_1 = require("react-hook-form");
const zod_1 = require("zod");
const zod_2 = require("@hookform/resolvers/zod");
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
const button_1 = require("@/components/ui/button");
const select_1 = require("@/components/ui/select");
const dialog_1 = require("@/components/ui/dialog");
const card_1 = require("@/components/ui/card");
const spinner_1 = __importDefault(require("../ui/spinner"));
// Schemas
const cardSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Name is required"),
    number: zod_1.z.string().length(16, "Card number must be 16 digits"),
    expiry: zod_1.z.string().regex(/^\d{2}\/\d{2}$/, "Enter expiration as MM/YY"),
    cvv: zod_1.z.string().min(3).max(4, "CVV must be 3 or 4 digits"),
    purpose: zod_1.z.string().min(1, "Purpose is required"),
});
const mobileSchema = zod_1.z.object({
    provider: zod_1.z.enum(["m-pesa", "airtel-money"], {
        errorMap: () => ({ message: "Select a valid provider" }),
    }),
    phone: zod_1.z
        .string()
        .regex(/^255\d{9}$/, "Phone must start with 255 and have 12 digits"),
    amount: zod_1.z
        .string()
        .regex(/^\d+$/, "Amount must be a number")
        .refine((val) => Number(val) >= 100, {
        message: "Minimum amount is 100 TZS",
    }),
    purpose: zod_1.z.string().min(1, "Purpose is required"),
});
const Donate = () => {
    const [selectedMethod, setSelectedMethod] = (0, react_1.useState)("card");
    const [serverError, setServerError] = (0, react_1.useState)(null);
    const [transactionId, setTransactionId] = (0, react_1.useState)(null);
    const [dialogOpen, setDialogOpen] = (0, react_1.useState)(false);
    const [dialogMessage, setDialogMessage] = (0, react_1.useState)("Processing...");
    const [dialogStatus, setDialogStatus] = (0, react_1.useState)("processing");
    const { register, handleSubmit, reset, setValue, formState: { errors }, } = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_2.zodResolver)(selectedMethod === "card" ? cardSchema : mobileSchema),
    });
    // Real-time WebSocket effect
    (0, react_1.useEffect)(() => {
        if (!transactionId)
            return;
        let ws;
        let reconnectTimeout;
        const connect = () => {
            ws = new WebSocket(`wss://${window.location.host}/api/ws?txnId=${transactionId}`);
            ws.onopen = () => {
                console.log("WebSocket connected:", transactionId);
            };
            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                setDialogMessage(data.status === "SUCCESSFUL"
                    ? "✅ Payment successful!"
                    : data.status === "FAILED"
                        ? "❌ Payment failed."
                        : "⏳ Payment pending...");
                if (data.status === "SUCCESSFUL" || data.status === "FAILED") {
                    setDialogStatus("done");
                    setTimeout(() => setDialogOpen(false), 3000);
                }
            };
            ws.onerror = (err) => {
                console.error("WebSocket error:", err);
            };
            ws.onclose = (event) => {
                console.log("WebSocket closed:", event.reason);
                // Attempt reconnect only if payment is still processing
                if (dialogStatus !== "done") {
                    reconnectTimeout = setTimeout(() => {
                        console.log("Reconnecting WebSocket...");
                        connect();
                    }, 3000); // retry every 3 seconds
                }
            };
        };
        connect();
        return () => {
            if (ws.readyState === WebSocket.OPEN)
                ws.close();
            clearTimeout(reconnectTimeout);
        };
    }, [transactionId, dialogStatus]);
    const onSubmit = async (data) => {
        setServerError(null);
        setDialogOpen(true);
        setDialogStatus("processing");
        setDialogMessage("⏳ Processing your payment...");
        if (selectedMethod === "card") {
            alert("Card payments coming soon. Thank you!");
            reset();
            setDialogOpen(false);
            return;
        }
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
        const formattedData = Object.assign(Object.assign({}, data), { phone: rawPhone });
        try {
            const res = await fetch("/api/mobile-payments/airtel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formattedData),
            });
            const result = await res.json();
            if (!res.ok) {
                setServerError(result.error || "Payment failed");
                setDialogMessage("❌ Error: " + (result.error || "Payment failed"));
                setDialogStatus("done");
                setTimeout(() => setDialogOpen(false), 3000);
                return;
            }
            const txnId = result.payment.mobilepayments.airtelTxnId;
            setTransactionId(txnId); // triggers WebSocket connection
            setDialogMessage("📲 Enter your Airtel PIN to complete payment...");
            setDialogStatus("pin");
            reset();
        }
        catch (error) {
            console.error("Network error:", error);
            setServerError("Network error. Please try again.");
            setDialogMessage("❌ Network error.");
            setDialogStatus("done");
            setTimeout(() => setDialogOpen(false), 3000);
        }
    };
    return (<div className="bg-gray-50 min-h-screen py-12">
      <dialog_1.Dialog open={dialogOpen}>
        <dialog_1.DialogContent className="text-center space-y-4">
          <dialog_1.DialogHeader>
            <dialog_1.DialogTitle>Processing Payment</dialog_1.DialogTitle>
          </dialog_1.DialogHeader>
          <spinner_1.default />
          <p className="text-sm text-gray-600">{dialogMessage}</p>
        </dialog_1.DialogContent>
      </dialog_1.Dialog>

      {/* Banner Section */}
      <section className="relative">
        <div className="relative w-full h-80 md:h-[300px]">
          <image_1.default src="/images/long.jpg" alt="Donation Banner" fill style={{ objectFit: "cover" }}/>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Make a Donation
          </h1>
          <p className="text-yellow-400 mt-2">
            Support our mission by donating through your preferred payment
            method.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <div className="container mx-auto px-6 py-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-10">
          <card_1.Card className="lg:w-1/2 bg-purple-100">
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

          {/* Form Card */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="flex justify-center space-x-4 mb-6">
              <button_1.Button variant={selectedMethod === "card" ? "default" : "outline"} onClick={() => setSelectedMethod("card")}>
                Pay with Card
              </button_1.Button>
              <button_1.Button variant={selectedMethod === "mobile" ? "default" : "outline"} onClick={() => setSelectedMethod("mobile")}>
                Pay with Mobile Money
              </button_1.Button>
            </div>

            <card_1.Card>
              <card_1.CardContent className="p-6 space-y-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <h2 className="text-xl font-bold text-purple-900 mb-2">
                    {selectedMethod === "card"
            ? "Card Information"
            : "Mobile Money"}
                  </h2>

                  {selectedMethod === "card" ? (<>
                      <InputField label="Cardholder Name" name="name" register={register} error={errors.name}/>
                      <InputField label="Card Number" name="number" register={register} error={errors.number}/>
                      <div className="grid grid-cols-2 gap-4">
                        <InputField label="Expiry (MM/YY)" name="expiry" register={register} error={errors.expiry}/>
                        <InputField label="CVV" name="cvv" register={register} error={errors.cvv}/>
                      </div>
                      <InputField label="Donation For" name="purpose" register={register} error={errors.purpose}/>
                    </>) : (<>
                      <div className="space-y-2">
                        <label_1.Label>Mobile Money Provider</label_1.Label>
                        <select_1.Select onValueChange={(value) => setValue("provider", value)} defaultValue="">
                          <select_1.SelectTrigger>
                            <select_1.SelectValue placeholder="Select Provider"/>
                          </select_1.SelectTrigger>
                          <select_1.SelectContent>
                            <select_1.SelectItem value="m-pesa">M-Pesa</select_1.SelectItem>
                            <select_1.SelectItem value="airtel-money">
                              Airtel Money
                            </select_1.SelectItem>
                          </select_1.SelectContent>
                        </select_1.Select>
                        {errors.provider &&
                typeof errors.provider === "object" &&
                "message" in errors.provider && (<p className="text-red-600 text-sm">
                              {errors.provider
                    .message}
                            </p>)}
                      </div>
                      <InputField label="Phone Number" name="phone" register={register} error={errors.phone}/>
                      <InputField label="Amount (TZS)" name="amount" register={register} error={errors.amount}/>
                      <InputField label="Donation For" name="purpose" register={register} error={errors.purpose}/>
                    </>)}

                  <button_1.Button type="submit" className="w-full">
                    Donate Now
                  </button_1.Button>
                </form>
              </card_1.CardContent>
            </card_1.Card>
          </div>
        </div>
      </div>
    </div>);
};
// Input Field Helper Component
const InputField = ({ label, name, register, error }) => (<div className="space-y-1">
    <label_1.Label>{label}</label_1.Label>
    <input_1.Input {...register(name)}/>
    {error && <p className="text-red-600 text-sm">{error.message}</p>}
  </div>);
exports.default = Donate;
