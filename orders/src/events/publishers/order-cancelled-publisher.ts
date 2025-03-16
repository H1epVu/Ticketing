import { Subjects, Publisher, OrderCancelledEvent } from '@henryvux02/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
