// let drinks = ["coke","vimto","water"];

// let cost = 3;

// let avai


// const drinkType = (drinks, availableDrinks) => {
//     if (drinks == availableDrinks){
//         console.log ("your choice of drink is available");
//     } else (drinks != availableDrinks);
//         console.log("Unfortunatley your drink isnt available");
// }

// return(availableDrinks)

// MY ATTEMPT UP TOP 


let balance = 5;

let drinks = [
    "coffee",
    "water",
    "coke",
];

const availability = (drink) => {
    for (let i = 0; i < drinks.length; i++){
        if (drink == drinks[i]){
            return true;  
        }   
    }
}

const cost = (drink) => {
    if (drink == "water"){
        return 2.00;
    }
    else if (drink == "coffee") {
        return 1.00;
    }
    else if (drink == "coke") {
        return 3;
    }
}

const order = (drink) => {
    if(!(availability(drinnk))) {
        console.log("Sorry, not available");
    }
    else if (cost(drink) > balance) {
        console.log("sorry, not available");
    }
    else {
        balance -= cost(drinl);
        console.log("You've got good taste!");
    }
}

order ("coffee");
order ("coffee");
order ("coffee");


