import { Request, Response, NextFunction } from 'express';
import express from 'express';
import PatchController from '../controllers/PATCH.controller';

const carPatchController = new PatchController();
const router = express.Router();

// Path routes
router.patch('/cars/update/:carId', (req: Request, res: Response) => {
  carPatchController.update(req, res);
});

export default router