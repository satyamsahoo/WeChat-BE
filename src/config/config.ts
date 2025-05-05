import dotenv from 'dotenv'
dotenv.config()

interface JWT {
    jwtSecret: string,
    jwtIssuer: string,
    jwtAudience: string
}

interface Config {
    env:  string,
    PORT: number,
    dbUsername: string,
    dbPassword: string,
    dbName: string,
    jwt: JWT
}

const config: Config = {
    env: 'development',
    PORT: Number(process.env.PORT) || 4000,
    dbUsername: 'satyamuser',
    dbPassword: 'oXmClpyZFF40bk8B',
    dbName: 'WeChat-DB',
    jwt: {
        jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
        jwtIssuer: process.env.JWT_ISSUER || 'defaultIssuer',
        jwtAudience: process.env.JWT_AUDIENCE || 'defaultAudience'
    }
}

export default config;