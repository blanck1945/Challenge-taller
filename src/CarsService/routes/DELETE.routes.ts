import { Request, Response, NextFunction } from 'express';
import express from 'express';
import DeleteController from '../controllers/DELETE.controller';

const carDeleteController = new DeleteController();
const router = express.Router();

router.delete('/cars/remove/:carId', (req: Request, res: Response) => {
  carDeleteController.remove(req, res);
});
