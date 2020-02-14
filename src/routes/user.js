import { Router } from 'express';
import connection from '../db/db';
const router = Router();

router.get('/', (req, res) => {
  var q = 'SELECT * FROM `users`';
  connection.query(q, function (error, results, fields) {
    if (error) throw error;
    return res.send(results)
  });
});

router.get('/:userId', (req, res) => {
  var q = 'SELECT * FROM `users` where `id`=' + req.params.userId;
  connection.query(q, function (error, results, fields) {
    if (error) throw error;
    return res.send(results)
  });
});

export default router;
