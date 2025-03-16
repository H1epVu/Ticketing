import { Subjects, Publisher, PaymentCreatedEvent } from '@henryvux02/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
