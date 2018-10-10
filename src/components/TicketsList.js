import React from 'react';
import Ticket from './Ticket';

const TicketsList = ({ tickets }) => (
    <div className="Tickets__wrapper">
        {tickets.sort((a,b) => a.price > b.price).map((t,i) =>
            <Ticket ticket={t} key={i}/>
        )}
    </div>
);

export default TicketsList;
