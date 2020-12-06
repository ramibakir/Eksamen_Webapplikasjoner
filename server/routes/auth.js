import express from 'express';
import { authController } from '../controllers/index.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/me', isAuthenticated, authController.currentUser);

export default router;
