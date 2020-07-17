import ExpressPromiseRouter from 'express-promise-router';
import { googleLogin } from '../controllers/custom-controller';

const router = ExpressPromiseRouter();

router.route('/google-login').post(googleLogin)

export default router;
