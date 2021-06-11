import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
	const appointments = appointmentsRepository.all();

	return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
	const { provider, date } = request.body;

	const parsedDate = startOfHour(parseISO(date));

	const findAppointInSameDate = appointmentsRepository.findByDate(parsedDate);

	if (findAppointInSameDate) {
		return response
			.status(400)
			.json({ message: 'This Appointment is already booked, F buddy' });
	}

	const appointment = appointmentsRepository.create({ provider, date });

	return response.json(appointment);
});

export default appointmentsRouter;
