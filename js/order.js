var myFormData = [];   //declare an array

$(function () {
    
    $("#formSubmit").on("click", function (e) {
        e.preventDefault();
        var name = document.forms["foodform"]["fullName"].value;
        var email = document.forms["foodform"]["email"].value;
        var address = document.forms["foodform"]["Address"].value;
        if(name == "" || email == "" || address == ""){
            alert('Incomplete Form')
        } else {
            form_data = $("#foodform").serializeArray();
            myFormData = form_data;
            checkout();
        }
            
    })
})

function checkout(){
    sessionStorage.setItem("Food", JSON.stringify(myFormData));
    window.location.href = "checkout.html";

}
