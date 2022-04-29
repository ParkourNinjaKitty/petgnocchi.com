/*Created by Camden Martin*/
let currentVersion = 1.2
let previouslyOpenedVersion = parseInt(localStorage['version']) || currentVersion;
let pets = parseInt(localStorage['pets']) || 0;
let multcost = parseInt(localStorage['multcost']) || 100;
let multiplier = parseInt(localStorage['multiplier']) || 1;
let totalImages = 14;

function ready() {
    update_version();
    update_html();
}

function clicked() {
    pets += multiplier;
    document.getElementById("amount").innerHTML = pets;
    localStorage['pets'] = pets;
}
function upgrade() {
    if (pets >= multcost) {
        pets -= multcost;
        multiplier += 1;
        multcost = parseInt(multcost * 1.5);
        update_storage();
        update_html();
    }
}
function reset() {
    localStorage.clear('multiplier','multcost','pets');

    pets = parseInt(localStorage['pets']) || 0;
    multcost = parseInt(localStorage['multcost']) || 100;
    multiplier = parseInt(localStorage['multiplier']) || 1;
    update_storage();
    update_html();
}

function update_html() {
    document.getElementById("upgrade-price").innerHTML = "Upgrade Price: " + multcost;
    document.getElementById("amount").innerHTML = pets;
    if (multiplier > totalImages) {document.getElementById("pet-button").src = String("GnocchiPictures/Gnocchi Image10.PNG");}
    else {document.getElementById("pet-button").src = String("GnocchiPictures/Gnocchi Image" + multiplier + ".PNG");}
    document.getElementById("level").innerHTML = String("Level " + multiplier);
}

function update_storage() {
    localStorage['pets'] = pets;
    localStorage['multcost'] = multcost;
    localStorage['multiplier'] = multiplier;
}

function update_version() {
    if (Math.floor(currentVersion) - Math.floor(previouslyOpenedVersion) != 0) {reset()}
    previouslyOpenedVersion = currentVersion;
    localStorage['version'] = previouslyOpenedVersion;
}