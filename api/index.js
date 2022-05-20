import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from '../api/routes/auth.js';
import usersRoute from '../api/routes/users.js';
import hotelsRoute from '../api/routes/hotels.js';
import roomsRoute from '../api/routes/rooms.js';

const app = express();

dotenv.config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log('Connected to Mongo DB.');
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on('disconnected', () => {
	console.log('Mongo DB disconnected');
});

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((error, req, res, next) => {
	const errorStatus = error.status || 500;
	const errorMessage = error.message || 'Something went wrong!';
	return res.status(errorStatus).json({
		success : false,
		status  : errorStatus,
		message : errorMessage,
		stack   : error.stack
	});
});

app.listen(process.env.PORT, () => {
	connect();
	console.log('Connected to server.');
});
