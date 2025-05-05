import app from './app'
import config from './config/config'

app.listen(config.PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT:::::${config.PORT}`)
})