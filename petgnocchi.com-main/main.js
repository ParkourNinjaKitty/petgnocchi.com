/*Created by Camden Martin*/
let currentVersion = 1.3
let previouslyOpenedVersion = parseInt(localStorage['version']) || currentVersion;
let pets = parseInt(localStorage['pets']) || 0;
let multcost = parseInt(localStorage['multcost']) || 100;
let multiplier = parseInt(localStorage['multiplier']) || 1;
let totalImages = 14;

function ready() {
    update_version();
    update_html();
    document.getElementById("pet-button").addEventListener('click', clicked);
    document.getElementById("upgrade-button").addEventListener('click', upgrade);
}

function clicked(e) {
    pets += multiplier;
    document.getElementById("amount").innerHTML = pets;
    localStorage['pets'] = pets;
    purr_effect(e.pageX, e.pageY);
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
    if (multiplier > totalImages) {document.getElementById("pet-button").src = String("GnocchiPictures/Gnocchi Image" + parseInt(Math.random() * (totalImages - 1) + 1) + ".PNG");}
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

function purr_effect(xpos, ypos) {
    console.log("purr function ran");
    console.log(xpos + ", " + ypos);
    let purr = document.createElement('div');
    purr.setAttribute("class", "purr-effect");
    purr.innerHTML = set_effect_text();
    document.getElementById("effects").appendChild(purr);
    purr.style.left = ((xpos + Math.floor(Math.random()*100-50)) + "px");
    purr.style.top = ((ypos + Math.floor(Math.random()*100-50)) + "px");
    setTimeout(() => {purr.remove();}, 1000);
}

function set_effect_text() {
    text = "";
    if (Math.floor(Math.random()*2)) {
        text = "pur"
        for (i=0; i<(Math.random()*5); i++) {
            text += "r"
        }
    }
    else {
        text = "me"
        for (i=0; i<(Math.random()*5); i++) {
            text += "o"
        }
        text += "w"
    }
    return text
}