/*Created by Camden Martin*/
function ready() {
    let multcost = parseInt(localStorage['multcost']) || 100;
    let pets = parseInt(localStorage['pets']) || 0;
    let multiplier = parseInt(localStorage['multiplier']) || 1;
    document.getElementById("upgrade-price").innerHTML = String("Upgrade Price: " + multcost);
    document.getElementById("amount").innerHTML = pets;
    if (multiplier > 10) {
        document.getElementById("pet-button").src = String("GnocchiPictures/Gnocchi Image10.PNG");
    }
    else {
        document.getElementById("pet-button").src = String("GnocchiPictures/Gnocchi Image" + multiplier + ".PNG");
    }
    
    document.getElementById("level").innerHTML = String("Level " + multiplier)
}
function clicked() {
    let multiplier = parseInt(localStorage['multiplier']) || 1;
    let pets = parseInt(localStorage['pets']) || 0;
    pets += multiplier;
    document.getElementById("amount").innerHTML = pets;
    localStorage['pets'] = pets;
}
function upgrade() {
    let multiplier = parseInt(localStorage['multiplier']) || 1;
    let multcost = parseInt(localStorage['multcost']) || 100;
    let pets = parseInt(localStorage['pets']) || 0;
    if (pets >= multcost) {
        pets -= multcost;
        multiplier += 1;
        multcost = parseInt(multcost * 1.5);
        localStorage['pets'] = pets;
        localStorage['multiplier'] = multiplier;
        localStorage['multcost'] = multcost;
        document.getElementById("upgrade-price").innerHTML = "Upgrade Price: " + multcost;
        document.getElementById("amount").innerHTML = pets;
        if (multiplier > 10) {
            document.getElementById("pet-button").src = String("GnocchiPictures/Gnocchi Image10.PNG");
        }
        else {
            document.getElementById("pet-button").src = String("GnocchiPictures/Gnocchi Image" + multiplier + ".PNG");
        }
        document.getElementById("level").innerHTML = String("Level " + multiplier);
    }
}
function reset() {
    localStorage.clear('multiplier','multcost','pets');
    let multiplier = parseInt(localStorage['multiplier']) || 1;
    let multcost = parseInt(localStorage['multcost']) || 100;
    let pets = parseInt(localStorage['pets']) || 0;
    localStorage['pets'] = pets;
    localStorage['multiplier'] = multiplier;
    localStorage['multcost'] = multcost;
    document.getElementById("upgrade-price").innerHTML = "Upgrade Price: " + multcost;
    document.getElementById("amount").innerHTML = pets;
}