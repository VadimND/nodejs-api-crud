import 'dotenv/config';
import { createAppServer } from './modules/node';

const PORT = Number(process.env.PORT || 3000);

createAppServer(PORT);
