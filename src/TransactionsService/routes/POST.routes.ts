import { Request, Response, NextFunction } from 'express';
import express from 'express';
import PostController from '../controllers/POST.controller';

const transactionPostController = new PostController();
const router = express.Router();

router.post('/transactions/create', (req: Request, res: Response, next: NextFunction) => {
  transactionPostController.create(req, res, next);
});

export default router;
