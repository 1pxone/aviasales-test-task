import { connect } from 'react-redux'
import TicketsList from '../components/TicketsList';

const filterTickets = (tickets, filters) => {
    var all = filters.findIndex(v => v === "all") >= 0;
    if(all){
        return tickets
    } else {
        var tmpArr = []
        filters.map(f => {
            tmpArr.push.apply( tmpArr, tickets.filter(t => t.stops === parseInt(f)) );
            return null;
        })
        return tmpArr
    }
}

const mapStateToProps = state => ({
    tickets: filterTickets(state.tickets.tickets, state.tickets.filters)
})

export default connect(mapStateToProps)(TicketsList)
