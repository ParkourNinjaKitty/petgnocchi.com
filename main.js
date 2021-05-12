function ready() {
    document.getElementById("amount").innerHTML = parseInt(localStorage['pets']) || 0;
}
function clicked() {
    let pets = parseInt(localStorage['pets']) || 0;
    pets += 1;
    document.getElementById("amount").innerHTML = pets;
    console.log(pets);
    localStorage['pets'] = pets;
}