import { Request, Response, NextFunction } from 'express';
import UrlShourtServices from '../services/UrlShourtServices';
import { ApiError } from '../errors/ApiError';
class AttachmentController {
    // Get all Attachments
    public async CreateUrlShort(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const date = req.body;
            const urlData = await UrlShourtServices.CreateUrlShort(date);
            res.status(200).json(urlData);
        } catch (error) {
            console.error(error);
            next(new ApiError(500, 'InternalServer', 'Internal Server Error'));
        }
    }
    public async getUrlShortById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = req.params.id;
            const urlData = await UrlShourtServices.getUrlShortById(id);
            res.status(200).json(urlData);
        } catch (error) {
            console.error(error);
            next(new ApiError(500, 'InternalServer', 'Internal Server Error'));
        }
    }
}
export default new AttachmentController()