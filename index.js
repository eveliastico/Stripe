import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './config/db.js';
import cors from 'cors';
import rutaPayment from './routes/paymentRoute.js';

dotenv.config({ path: './variables.env' });

const app = express();
const port = process.env.PORT || 3000;

db.conectarBD();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/payments', rutaPayment);

app.listen(port, () => {
    console.log(`API corriendo en http://localhost:${port}`);
});

process.on('SIGINT', async () => {
    await db.desconectarBD();
    process.exit(0);
});