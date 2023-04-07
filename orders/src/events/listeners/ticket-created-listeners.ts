import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TicketCreatedEvent } from '@gm_web_tickets/common';
import { Ticket } from '../../models/ticket';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = 'orders-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
        
  }

}