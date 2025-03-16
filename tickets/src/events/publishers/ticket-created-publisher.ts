import { Publisher, Subjects, TicketCreatedEvent } from '@henryvux02/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
