function tickets(arr, sortingParam) {
    var resultArr = [];
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        return Ticket;
    }());
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var arrString = arr_1[_i];
        var _a = arrString.split('|'), name_1 = _a[0], priceString = _a[1], status_1 = _a[2];
        var price = Number(priceString);
        var newTicket = new Ticket(name_1, price, status_1);
        resultArr.push(newTicket);
    }
    resultArr = resultArr.sort(function (obj1, obj2) { return obj1[sortingParam].localeCompare(obj2[sortingParam]); });
    console.log(resultArr);
}
tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
