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
const client_1 = require("@prisma/client");
const shortlink_1 = __importDefault(require("shortlink"));
const DatabaseError_1 = require("../errors/DatabaseError");
const NotFoundError_1 = require("../errors/NotFoundError");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
class UrlShourtServices {
    CreateUrlShort(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const urlData = yield prisma.urlShourt.create({
                    data: Object.assign(Object.assign({}, data), { shortUrl: shortlink_1.default.generate(8) }),
                });
                return urlData;
            }
            catch (error) {
                throw new DatabaseError_1.DatabaseError('Failed to create short URL', error);
            }
        });
    }
    getUrlShortById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const urlData = yield prisma.urlShourt.findUnique({
                    where: { id: id }
                });
                if (!urlData) {
                    throw new NotFoundError_1.NotFoundError(`Url with this id ${id} not found`);
                }
                yield prisma.urlShourt.update({
                    where: { id: id },
                    data: { noOfClike: urlData.noOfClike + 1 }
                });
                return urlData;
            }
            catch (error) {
                throw new DatabaseError_1.DatabaseError('Failed to create short URL', error);
            }
        });
    }
}
exports.default = new UrlShourtServices();
