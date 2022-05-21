import express from 'express';
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//Create

router.post('/', verifyAdmin, createHotel);

//Update

router.put('/:id', verifyAdmin, updateHotel);

//Get

router.get('/:id', getHotel);

//Get All

router.get('/', getHotels);

//Delete

router.delete('/:id', verifyAdmin, deleteHotel);

export default router;
