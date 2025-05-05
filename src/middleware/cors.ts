import cors from 'cors'

const corsOptions = {
    origin: "http://localhost:5173",
    optionSuccessStatus: 200
}


export default cors(corsOptions)