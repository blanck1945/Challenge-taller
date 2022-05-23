import { Request, Response, NextFunction } from 'express';
import express from 'express';
import GetController from '../controllers/GET.controller';

const transactionGetController = new GetController();
const router = express.Router();

router.get('/transactions/check', (req: Request, res: Response, next: NextFunction) => {
  transactionGetController.check(req, res, next);
});
router.get('/transactions/index', (req: Request, res: Response) => {
  transactionGetController.index(req, res);
});
router.get('/transactions/show/:transactionsId', (req: Request, res: Response) => {
    transactionGetController.show(req, res);
  });

export default router
