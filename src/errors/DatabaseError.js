"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseError = void 0;
const ApiError_1 = require("./ApiError");
class DatabaseError extends ApiError_1.ApiError {
    // Additional properties if needed for more context
    constructor(message, originalError) {
        super(500, 'DatabaseError', message, originalError);
        // You can log the `originalError` here or in centralized error handling middleware
    }
}
exports.DatabaseError = DatabaseError;
