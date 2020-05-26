class Cars{
    constructor(regnum){
        this._regnum = regnum;
        this._hours = 0;
        this._charge = 0.00;
    }
    get regnum(){
        return this._regnum;
    }
    get hours(){
        return this._hours
    }
    get charge(){
        return this._charge
    }
    increaseHours(){
        this._hours++;
        this._charge += 1.50;
    }
}

const pay = (reg, hr) => {
    const car = Car(reg);
    for (i = 0; i < hr; i++){
        car.increaseHours();
    }
console.log(`You need to pay £${car.charge} for ${car.hours} hours. `);
}
pay ("M8 CAR", 6);