import { Router } from 'express';
import UrlShourtRoutes from './UrlShourtRoutes';
const rootRouter = Router();

rootRouter.use('/UrlShourt',UrlShourtRoutes)

export default rootRouter;