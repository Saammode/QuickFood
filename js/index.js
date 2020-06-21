//Navigation responsive onclick
var optionBar = document.querySelector("#optionBar");
var navigation = document.querySelector(".navForResponsive");
var crossBar = document.querySelector(".crossbtnr");

optionBar.addEventListener("click", displayOption);
crossBar.addEventListener("click", closeCrossBar);

function displayOption(){
        navigation.style.display = "block";
        crossBar.style.display = "block";
        optionBar.style.display = "none";
}
function closeCrossBar(){
    navigation.style.display = "none";
    crossBar.style.display = "none";
    optionBar.style.display = "block";
}

//booking
//document.getElementById('desiredDate').min = Date;