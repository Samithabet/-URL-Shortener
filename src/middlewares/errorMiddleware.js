"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const ApiError_1 = require("../errors/ApiError");
function errorMiddleware(error, req, res, next) {
    if (error instanceof ApiError_1.ApiError) {
        // Custom error handling for API-specific errors
        res.status(error.statusCode).json(error.toResponseJSON());
    }
    else {
        // Catch-all for other unexpected errors
        console.error('Unexpected error:', error);
        res.status(500).json({ status: 'error', message: 'An unexpected error occurred.' });
    }
}
exports.errorMiddleware = errorMiddleware;
