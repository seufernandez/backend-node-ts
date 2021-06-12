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

	const parsedDate = parseISO(date);

	return response.json(appointment);
});

export default appointmentsRouter;

// 3 MANDAMENTO DA ROTA =
// - RECEBER A REQUISICAO
// - CHAMAR UM ARQUIVO PRA TRATAR DAS INFORMACOES DA REQUISICAO
// - DEVOLVER UMA RESPOSTA
