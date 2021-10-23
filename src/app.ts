import "dotenv/config";
import express, { json } from 'express';
import { router } from "./routes";

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(router);



app.get('/github', (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENTE_ID}`)
});

app.get('/signin/callback', (request, response) => {
    const { code } = request.query;

    return response.json(code);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});