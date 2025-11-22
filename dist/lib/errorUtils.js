"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessages = void 0;
// errorUtils.ts
const getErrorMessages = (error) => {
    let message;
    if (error instanceof Error) {
        message = error.message;
    }
    else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message);
    }
    else if (typeof error === "string") {
        message = error;
    }
    else {
        message = "Something went wrong";
    }
    return message;
};
exports.getErrorMessages = getErrorMessages;
