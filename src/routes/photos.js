import uuidv4 from 'uuid/v4';
import { Router } from 'express';
import connection from '../db/db';
const router = Router();

router.get('/', (req, res) => {
  var q = 'SELECT * FROM `photos`';
  connection.query(q, function (error, results, fields) {
    if (error) throw error;
    return res.send(results);
  });
});

router.get('/:loggedInUserId', (req, res) => {
  var q = 'SELECT * FROM `photos` where user_id='+ req.params.loggedInUserId;
  connection.query(q, function (error, results, fields) {
    if (error) throw error;
    return res.send(results);
  });
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.messages[id] = message;

  return res.send(message);
});

router.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;

  req.context.models.messages = otherMessages;

  return res.send(message);
});

export default router;
