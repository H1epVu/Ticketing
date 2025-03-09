import { Publisher, TicketCreatedEvent, Subjects } from '@henryvux02/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}