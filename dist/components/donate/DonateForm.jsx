"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const zod_1 = require("@hookform/resolvers/zod");
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const select_1 = require("@/components/ui/select");
const zod_2 = require("zod");
const cardSchema = zod_2.z.object({
    name: zod_2.z.string().min(2, "Name is required"),
    number: zod_2.z.string().length(16, "Card number must be 16 digits"),
    expiry: zod_2.z.string().regex(/^\d{2}\/\d{2}$/, "Enter expiration as MM/YY"),
    cvv: zod_2.z.string().min(3).max(4, "CVV must be 3 or 4 digits"),
    purpose: zod_2.z.string().min(1, "Purpose is required"),
});
const mobileSchema = zod_2.z.object({
    provider: zod_2.z.enum(["m-pesa", "airtel-money"], {
        errorMap: () => ({ message: "Select a valid provider" }),
    }),
    phone: zod_2.z
        .string()
        .regex(/^255\d{9}$/, "Phone must start with 255 and have 12 digits"),
    amount: zod_2.z
        .string()
        .regex(/^\d+$/, "Amount must be a number")
        .refine((val) => Number(val) >= 100, {
        message: "Minimum amount is 100 TZS",
    }),
    purpose: zod_2.z.string().min(1, "Purpose is required"),
});
const InputField = ({ label, name, register, error }) => (<div className="relative">
    <label_1.Label className="absolute -top-3 left-3 bg-white px-1 text-gray-600 text-sm">
      {label}
    </label_1.Label>
    <input_1.Input {...register(name)} className="pt-4"/>
    {error && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
  </div>);
const DonateForm = ({ selectedMethod, setValue, onSubmit, serverError, }) => {
    var _a;
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(selectedMethod === "card" ? cardSchema : mobileSchema),
    });
    return (<card_1.Card className="hover:shadow-lg transition-shadow duration-300">
      <card_1.CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-xl font-bold text-purple-900 mb-2">
            {selectedMethod === "card" ? "Card Information" : "Mobile Money"}
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
                <select_1.Select onValueChange={(val) => setValue("provider", val)} defaultValue="">
                  <select_1.SelectTrigger>
                    <select_1.SelectValue placeholder="Select Provider"/>
                  </select_1.SelectTrigger>
                  <select_1.SelectContent>
                    <select_1.SelectItem value="m-pesa">M-Pesa</select_1.SelectItem>
                    <select_1.SelectItem value="airtel-money">Airtel Money</select_1.SelectItem>
                  </select_1.SelectContent>
                </select_1.Select>
                {errors.provider && (<p className="text-red-600 text-sm">
                    {(_a = errors.provider) === null || _a === void 0 ? void 0 : _a.message}
                  </p>)}
              </div>
              <InputField label="Phone Number" name="phone" register={register} error={errors.phone}/>
              <InputField label="Amount (TZS)" name="amount" register={register} error={errors.amount}/>
              <InputField label="Donation For" name="purpose" register={register} error={errors.purpose}/>
            </>)}

          <button_1.Button type="submit" className="w-full bg-gradient-to-r from-purple-900 to-purple-700 hover:scale-105 transition-transform duration-300">
            Donate Now ❤️
          </button_1.Button>
          {serverError && (<p className="text-red-600 text-center">{serverError}</p>)}
        </form>
      </card_1.CardContent>
    </card_1.Card>);
};
exports.default = DonateForm;
