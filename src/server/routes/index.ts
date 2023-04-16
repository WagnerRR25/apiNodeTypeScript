import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers/cidades';



const router = Router();

router.get('/', (_, res) => {
  return res.send('Hello, DEV!');
});

router.post('/cidades', (req, res) => {
  console.log(req.body);

  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };