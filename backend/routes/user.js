import express from "express";
import { Login, updateRequest, getRequests} from '../controllers/users.js';

const router = express.Router();

router.post('/Login', Login)
router.post('/updateRequest', updateRequest);
router.get('/getRequests', getRequests);


export default router;