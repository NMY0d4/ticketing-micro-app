import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@gm_web_tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
