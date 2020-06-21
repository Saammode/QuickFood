var Food = JSON.parse(sessionStorage.getItem("Food"))


document.querySelector('.name').innerHTML = Food[0].value;
document.querySelector('.email').innerHTML = Food[1].value;
document.querySelector('.food').innerHTML = Food[2].value;
document.querySelector('.quantity').innerHTML = Food[3].value;
document.querySelector('.address').innerHTML = Food[4].value;

if (Food[2].value === 'Sandwich'){
    document.querySelector('.amount').innerHTML = 60 
} else if (Food[2].value === 'Spaghetti') {
    document.querySelector('.amount').innerHTML = 50
} else if (Food[2].value === 'Submarine') {
    document.querySelector('.amount').innerHTML = 65
} else if (Food[2].value === 'Burger') {
    document.querySelector('.amount').innerHTML = 110
} else if (Food[2].value === 'FriedNoodles') {
    document.querySelector('.amount').innerHTML = 35
} else if (Food[2].value === 'Farata Roll') {
    document.querySelector('.amount').innerHTML = 40
} else if (Food[2].value === 'Fried Rice') {
    document.querySelector('.amount').innerHTML = 30
} else if (Food[2].value === 'Kottu Roshi') {
    document.querySelector('.amount').innerHTML = 40
} else if (Food[2].value === 'Nashi Goreng') {
    document.querySelector('.amount').innerHTML = 40
} else {
    document.querySelector('.amount').innerHTML = 100
}


var quantity = Food[3].value
var amount = document.getElementById('price').innerText;
var total = quantity * amount;
document.querySelector('.total').innerHTML = total;

sessionStorage.setItem("Total", total);
sessionStorage.setItem("Name", Food[0].value);
sessionStorage.setItem("Address", Food[4].value);
