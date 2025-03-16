import { Publisher, Subjects, TicketUpdatedEvent } from '@henryvux02/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
