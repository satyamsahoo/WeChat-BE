import dotenv from 'dotenv'
dotenv.config()

interface Config {
    env:  string,
    PORT: number
}

const config: Config = {
    env: 'development',
    PORT: Number(process.env.PORT) || 4000
}

export default config;