let day = "tuesday";


const person = {
    name: "Baz",
    age: 20,
    weekdayalarm: "set to 7",
    weekendalarm: "no alarm",
};

if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"){
    console.log(person.weekdayalarm)
}else if (day == "saturday" || day == "sunday"){
    console.log(person.weekendalarm);
}else{
    console.log("define a day");
}

 


