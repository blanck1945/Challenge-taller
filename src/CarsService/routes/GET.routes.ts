import { Request, Response, NextFunction } from 'express';
import express from 'express';
import GetController from '../controllers/GET.controller';

const carGetController = new GetController();
const router = express.Router();

// Get routes
router.get('/cars/check/', (req: Request, res: Response, next: NextFunction) => {
  carGetController.check(req, res, next);
});
router.get('/cars/index', (req: Request, res: Response) => {
  carGetController.index(req, res);
});
router.get('/cars/index/v2', (req: Request, res: Response) => {
  carGetController.indexV2(req, res);
});
router.get('/cars/show/:carId', (req: Request, res: Response) => {
  carGetController.show(req, res);
});
router.get('/cars/show/v2/:carId', (req: Request, res: Response) => {
  carGetController.showV2(req, res);
});
router.get('/cars/show/:carId/services', (req: Request, res: Response) => {
  carGetController.carServices(req, res);
});

export default router;
