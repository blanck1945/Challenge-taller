import { Request, Response, NextFunction } from 'express';
import express from 'express';
import DeleteController from '../controllers/DELETE.controller';

const transactionDeleteController = new DeleteController();
const router = express.Router();

router.delete('/transactions/remove/:transactionsId', (req: Request, res: Response, next: NextFunction) => {
  transactionDeleteController.remove(req, res, next);
});

export default router;