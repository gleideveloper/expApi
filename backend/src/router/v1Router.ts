import { Router } from 'express';
import pingRouter from '../resources/ping/ping.router';
import produtoRouter from '../resources/produto/produto.router';

const router = Router();

router.use('/ping', pingRouter);
router.use('/produtos', produtoRouter);

export default router;
