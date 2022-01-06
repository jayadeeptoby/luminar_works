var baleno={
    colors:["red","white","black"],
    varients:["petrol"],
    price:"8lacks",
    manufacture:"nexa",
    getPrice(){
        return this.price
    }
}
var glanza={
    manufacture:"toyota",
    price:"9lacks"
}
glanza.__proto__=baleno
console.log(glanza.colors);