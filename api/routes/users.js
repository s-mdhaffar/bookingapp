import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//Update

router.put('/:id', verifyUser, updateUser);

//Get

router.get('/:id', verifyUser, getUser);

//Get All

router.get('/', verifyAdmin, getUsers);

//Delete

router.delete('/:id', verifyUser, deleteUser);

export default router;
