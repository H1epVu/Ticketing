import { Subjects, Publisher, ExpirationCompleteEvent } from "@henryvux02/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}