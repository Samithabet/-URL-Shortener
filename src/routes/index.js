"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UrlShourtRoutes_1 = __importDefault(require("./UrlShourtRoutes"));
const rootRouter = (0, express_1.Router)();
rootRouter.use('/UrlShourt', UrlShourtRoutes_1.default);
exports.default = rootRouter;
