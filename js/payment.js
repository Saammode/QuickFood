// I am using latest javascript ES6 In these functions

submit = () =>{
    event.preventDefault()
alert('Payment Successful')
}

goBack = () =>{
    window.location.href = "checkout.html";
}


const total = sessionStorage.getItem("Total");
const name = sessionStorage.getItem("Name");
const address = sessionStorage.getItem("Address");

document.querySelector('.total').innerHTML = total
document.querySelector('.fullname').value = name
document.querySelector('.address').value = address

