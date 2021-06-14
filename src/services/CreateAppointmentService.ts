import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
// tasks
//
// [x] Recebimento de informações
// [x] Tratamento de Erros e Excessoes
// [x] Acesso ao Repositório

// DEPENDENCY INVERSION

interface Request {
	provider: string;
	date: Date;
}

class CreateAppointmentService {
	private appointmentsRepository: AppointmentsRepository;

	constructor(appointmentsRepository: AppointmentsRepository) {
		this.appointmentsRepository = appointmentsRepository;
	}

	public execute({ date, provider }: Request): Appointment {
		const appointmentDate = startOfHour(date);

		const findAppointInSameDate =
			this.appointmentsRepository.findByDate(appointmentDate);

		if (findAppointInSameDate) {
			throw Error('This Appointment is already booked, F buddy');
		}

		const appointment = this.appointmentsRepository.create({
			provider,
			date: appointmentDate,
		});
		return appointment;
	}
}
export default CreateAppointmentService;
