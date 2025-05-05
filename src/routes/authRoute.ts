import express, {Request, Response} from 'express'
import { fetchAndValidateOTP, verifyOTP, registerUser } from '../controllers/authController'
const router = express.Router()

router.post('/otp', fetchAndValidateOTP)
router.post('/otp-verify', verifyOTP)
router.post('/register', registerUser)
// router.post('/token', fetchToken)

export default router