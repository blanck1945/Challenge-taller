import { Request, Response, NextFunction } from 'express';
import express from 'express';
import GetController from '../controllers/GET.controller';

const clientsController = new GetController();
const router = express.Router();

// Get routes
router.get('/clients/check', (req: Request, res: Response, next: NextFunction) => {
  clientsController.check(req, res, next);
});
router.get('/clients/index', (req: Request, res: Response) => {
  clientsController.index(req, res);
});
router.get('/clients/show/:clientId', (req: Request, res: Response) => {
  clientsController.show(req, res);
});

export default router;
