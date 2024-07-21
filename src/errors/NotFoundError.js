"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
// src/errors/NotFoundError.ts
const ApiError_1 = require("./ApiError");
class NotFoundError extends ApiError_1.ApiError {
    constructor(message, originalError) {
        // 404 is the standard response code for not found resources.
        super(404, 'NotFoundError', message, originalError);
    }
}
exports.NotFoundError = NotFoundError;
