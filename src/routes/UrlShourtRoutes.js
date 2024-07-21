"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UrlShourtControllers_1 = __importDefault(require("../controllers/UrlShourtControllers"));
const UrlShourtRoutes = (0, express_1.Router)();
UrlShourtRoutes.post('/', UrlShourtControllers_1.default.CreateUrlShort);
UrlShourtRoutes.get('/:id', UrlShourtControllers_1.default.getUrlShortById);
exports.default = UrlShourtRoutes;
