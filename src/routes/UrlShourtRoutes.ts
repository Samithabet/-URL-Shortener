import { Router } from 'express';
import UrlShourtControllers from '../controllers/UrlShourtControllers';


const UrlShourtRoutes = Router();


UrlShourtRoutes.post('/' ,UrlShourtControllers.CreateUrlShort)
UrlShourtRoutes.get('/:id' ,UrlShourtControllers.getUrlShortById)

export default UrlShourtRoutes;