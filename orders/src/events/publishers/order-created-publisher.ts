import { Publisher, OrderCreatedEvent, Subjects } from '@henryvux02/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
