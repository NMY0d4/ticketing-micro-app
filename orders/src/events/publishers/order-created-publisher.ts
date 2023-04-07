import { Publisher, OrderCreatedEvent, Subjects } from '@gm_web_tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
