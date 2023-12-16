import express from 'express'
import router from "./src/routes/router.js"
const app = express()

app.use(router);

app.listen(3000, (err) => {
    if (err) {
        console.log("Erro ao servir webApp");
    } else {
        console.log("WebApp running on port 3000");
    }
})