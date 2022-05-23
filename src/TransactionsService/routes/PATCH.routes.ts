import { Request, Response, NextFunction } from 'express';
import express from 'express';
import PatchController from '../controllers/PATCH.controller';

const transactionPatchController = new PatchController();
const router = express.Router();

router.patch('/transactions/update/:transactionsId', (req: Request, res: Response, next: NextFunction) => {
  transactionPatchController.update(req, res, next);
});

export default router;
