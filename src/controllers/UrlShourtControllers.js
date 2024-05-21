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
const UrlShourtServices_1 = __importDefault(require("../services/UrlShourtServices"));
const ApiError_1 = require("../errors/ApiError");
class AttachmentController {
    // Get all Attachments
    CreateUrlShort(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const date = req.body;
                const urlData = yield UrlShourtServices_1.default.CreateUrlShort(date);
                res.status(200).json(urlData);
            }
            catch (error) {
                console.error(error);
                next(new ApiError_1.ApiError(500, 'InternalServer', 'Internal Server Error'));
            }
        });
    }
    getUrlShortById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const urlData = yield UrlShourtServices_1.default.getUrlShortById(id);
                res.status(200).json(urlData);
            }
            catch (error) {
                console.error(error);
                next(new ApiError_1.ApiError(500, 'InternalServer', 'Internal Server Error'));
            }
        });
    }
}
exports.default = new AttachmentController();
