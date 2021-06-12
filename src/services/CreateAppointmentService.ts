import Appointment from '../models/Appointment';

class CreateAppointmentService {
	public execute() {
		const appointmentDate = startOfHour(parsedDate);

		const findAppointInSameDate = appointmentsRepository.findByDate(parsedDate);

		if (findAppointInSameDate) {
			return response
				.status(400)
				.json({ message: 'This Appointment is already booked, F buddy' });
		}

		const appointment = appointmentsRepository.create({
			provider,
			date: appointmentDate,
		});
	}
}
