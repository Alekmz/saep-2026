import { Router } from 'express';
import pool from '../config/db';

const router = Router();

// Verifica se a API está no ar e se consegue falar com o banco
router.get('/status', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ api: 'online', banco: 'conectado' });
  } catch (erro) {
    console.error('Falha ao conectar no banco:', erro);
    res.json({ api: 'online', banco: 'sem conexão' });
  }
});

export default router;
