function solve(ticketInfo, sortingCriteria){
    let tickets = [];

    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for (let index = 0; index < ticketInfo.length; index++) {
        let currentArrayInfo = ticketInfo[index];
        let ticketData = currentArrayInfo.split('|');
        let destination = ticketData[0];
        let price = ticketData[1];
        price = Math.round(price * 100) / 100
        let status = ticketData[2];
        
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }
    if (sortingCriteria == 'destination') {
        tickets = tickets.sort((a,b) => (a.destination > b.destination) ? 1 : ((b.destination > a.destination) ? -1 : 0));
    }
    else if (sortingCriteria == 'price') {
        tickets = tickets.sort((a, b) => {
            if(a.price != b.price) {
                a.price - b.price
            } else {
                return;
            }    
        });
    }
    else if (sortingCriteria == 'status') {
        tickets = tickets.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0));
    }
    
    return tickets;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'));