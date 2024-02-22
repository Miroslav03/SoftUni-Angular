type objectType = {
    destination: string,
    price: number,
    status: string
}

function tickets(arr: string[], sortingParam: string): objectType[] {


    let resultArr: objectType[] = []

    class Ticket {
        constructor(public destination: string, public price: number, public status: string) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (const arrString of arr) {
        let [name, priceString, status] = arrString.split('|');
        const price: number = Number(priceString);

        const newTicket = new Ticket(name, price, status);
        resultArr.push(newTicket);
    }

    resultArr = resultArr.sort((obj1, obj2) => obj1[sortingParam].localeCompare(obj2[sortingParam]));

    return resultArr;
}

tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')