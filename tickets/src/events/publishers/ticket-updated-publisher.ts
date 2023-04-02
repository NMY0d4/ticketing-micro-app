import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@gm_web_tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
