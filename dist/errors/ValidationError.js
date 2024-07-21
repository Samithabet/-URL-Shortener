"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const ApiError_1 = require("./ApiError");
class ValidationError extends ApiError_1.ApiError {
    constructor(message, errors, originalError) {
        super(400, 'ValidationError', message, originalError);
        if (errors) {
            this.errors = errors;
        }
    }
    // Override to include specific validation error details
    toResponseJSON() {
        const response = super.toResponseJSON();
        if (this.errors) {
            response.errors = this.errors; // Add the 'errors' field to the response
        }
        return response;
    }
}
exports.ValidationError = ValidationError;
