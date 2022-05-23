import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//Create

router.post('/:hotelid', verifyAdmin, createRoom);

//Update

router.put('/:id', verifyAdmin, updateRoom);

//Get

router.get('/:id', getRoom);

//Get All

router.get('/', getRooms);

//Delete

router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);

export default router;
