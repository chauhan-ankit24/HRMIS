import express from "express";
import { Login, updateRequest, getRequests, submitSelfAppraisel } from '../controllers/users.js';

const router = express.Router();

router.post('/Login', Login)
router.post('/updateRequest', updateRequest);
router.put('/submitSelfAppraisel', submitSelfAppraisel);
router.get('/getRequests', getRequests);

export default router;