"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts or src/app.ts
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.setMiddlewares();
        this.setRoutes();
        this.setErrorMiddlewares();
    }
    setMiddlewares() {
        // It's good to have a middleware that parses incoming requests with JSON payloads.
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: true })); // `true` allows for rich objects and arrays to be encoded into the URL-encoded format.
        // CORS and other security-related middleware would also go here.
    }
    setRoutes() {
        // Prefixing the routes with '/api' is a common convention for indicating that this is an API endpoint.
        this.app.use('/api', index_1.default);
        // Here you would add the other routes in a similar manner.
        // Example: this.app.use('/api/users', userRoutes);
    }
    setErrorMiddlewares() {
        // Error handling middleware should be the last middleware added.
        this.app.use(errorMiddleware_1.errorMiddleware);
    }
    listen() {
        const PORT = process.env.PORT || 3000; // Good use of environment variable for the PORT with a fallback.
        this.app.listen(PORT, () => __awaiter(this, void 0, void 0, function* () {
            console.log(`Server is running on http://localhost:${PORT}`); // Informative startup log is useful.
        }));
    }
}
// This part initiates your app listening, so it makes sense to be outside of the App class.
const app = new App();
app.listen();
