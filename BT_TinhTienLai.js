class Client {
    constructor(name, money, duration) {
        this.name = name;
        this.money = money;
        this.duration = duration;
    }

    getInterestRate()
    {
        let interestRate = this.extracted();
        return this.money * interestRate / 12 * this.duration;
    }

    getCompounding() {
        return this.money * Math.pow(1 + this.extracted() / 12, this.duration);
    }

    extracted() {
        let interestRate = 0;
        if (this.duration > 0 && this.duration < 6)
        {
            interestRate = 7.5 / 100;
        } else if (this.duration <= 12) {
            interestRate = 8 / 100;
        } else if (this.duration <= 24) {
            interestRate = 8.5 / 100;
        } else if (this.duration > 24) {
            interestRate = 10 / 100;
        }
        return interestRate;
    }

    getTotalMoney() {
        return this.money + this.getInterestRate();
    }
}

let client = new Client('Quang', 20000000, 24);
console.log(client);
console.log('So tien lai la:' + client.getInterestRate());
console.log('Tong so tien la:' + client.getTotalMoney());
console.log('Lai kep:' + client.getCompounding())