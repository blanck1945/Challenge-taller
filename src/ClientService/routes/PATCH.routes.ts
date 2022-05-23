import { Request, Response } from 'express';
import express from 'express';
import PatchController from '../controllers/PATCH.contoller';

const clientPatchController = new PatchController();
const router = express.Router();

router.patch('/clients/update/:clientId', (req: Request, res: Response) => {
  clientPatchController.update(req, res);
});

router.patch('/clients/archived/:clientId', (req: Request, res: Response) => {
  clientPatchController.archived(req, res);
});

export default router