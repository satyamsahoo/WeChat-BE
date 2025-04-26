import express, {Request, Response} from 'express';
const app = express()

app.get('/health-check', (req: Request, res: Response) => {
    res.sendStatus(200)
})

export default app