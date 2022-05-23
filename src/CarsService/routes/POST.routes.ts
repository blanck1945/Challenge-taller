import { Request, Response, NextFunction } from 'express';
import express from 'express';
import PostController from '../controllers/POST.controller';

const carPostController = new PostController();
const router = express.Router();

// Post routes
router.post('/cars/create', (req: Request, res: Response) => {
  carPostController.create(req, res);
});

export default router
