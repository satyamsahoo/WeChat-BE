import express, {Request, Response} from 'express';
import authRouter from './routes/authRoute'
import cors from './middleware/cors';
import { db } from './dbConnection';
const app = express()
import { checkJwt } from './middleware/checkJWT';

db.then()
app.use(express.json())
app.use(cors)
app.use('/auth', authRouter)
app.get('/health-check', (req: Request, res: Response) => {
    res.json({message: 'Server is up and running file'})
})

export default app