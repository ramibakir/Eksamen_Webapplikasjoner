import express from 'express';
import { emailController } from '../controllers/index.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.get('/', emailController.list);
router.post('/send', isAuthenticated, emailController.create);

export default router;
