import { Request, Response } from 'express';
import express from 'express';
import DeleteController from '../controllers/DELETE.controller';

const clientDeleteController = new DeleteController();
const router = express.Router();

router.delete('/clients/remove/:clientId', (req: Request, res: Response) => {
  clientDeleteController.remove(req, res);
});

export default router
