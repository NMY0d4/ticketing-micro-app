import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@gm_web_tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
