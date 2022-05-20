import express from 'express';
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';

const router = express.Router();

//Create

router.post('/', createHotel);

//Update

router.put('/:id', updateHotel);

//Get

router.get('/:id', getHotel);

//Get All

router.get('/', getHotels);

//Delete

router.delete('/:id', deleteHotel);

export default router;
