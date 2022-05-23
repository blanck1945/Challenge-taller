import { Request, Response, NextFunction } from 'express';
import express from 'express';
import PostController from '../controllers/POST.controller';

const clientsController = new PostController();
const router = express.Router();

router.post('/clients/create', (req: Request, res: Response) => {
  clientsController.create(req, res);
});

export default router;
