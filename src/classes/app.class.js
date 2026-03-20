import express from 'express';
import path from 'node:path';
import { fileURLToPath} from 'node:url';
import { app_paths} from './../constants/constants.js'
import { index} from './../routes/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class App {
    constructor() {
        this.PORT = process.env.PORT || 3000;
        this.app = express();
        this
            .#setViewEngine()
            .#serveAssets()
            .#registerMiddlewareBuiltIns()
            .#registerRoutes()
            .#registerErrorHandler()
        }

    getApp() {
        return this.app;
    }

    startServer() {
        this.app.listen(this.PORT, (err) => {
            if (err) {
                throw err;
            }
        })

        console.log(`Server listening on port ${this.PORT}`)
    }

    #registerRoutes() {
        this.app.use(app_paths.HOME, index)
        return this;
    }

    #setViewEngine() {
        this.app.set(app_paths.VIEWS, path.join(__dirname,'..', app_paths.VIEWS))
        this.app.set('view engine', 'ejs')
        return this;
    }

    #serveAssets() {
        const assetsPath = path.join(__dirname, '..',  app_paths.PUBLIC)
        this.app.use(express.static(assetsPath))
        return this;
    }

    #registerMiddlewareBuiltIns() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        return this;
    }

    #registerErrorHandler() {
        this.app.use((err, req,res, next) => {
            console.error(err);
            res.status(err.statusCode || 500).send(err.message)
        })
        return this;
    }
}

const app = new App();
export { app }
