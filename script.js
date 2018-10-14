var start = document.getElementById('start')
var navButtons = document.getElementsByClassName('navButtons');
var level = 1;

start.onclick = function() {
    start.style.display = "none";
    displayButtons(3, ["Email","Google Books","Ancestry"]);
}

function displayButtons(num, buttonNames) {
    for(i=0; i<num; i++) {
        navButtons[i].style.display="inline-block";
        navButtons[i].innerHTML = buttonNames[i];
    }
    for(i=num; i<navButtons.length; i++) {
        navButtons[i].style.display="none";
    }
}

navButtons[0].onclick = function() {
    upLevel(navButtons[0].innerHTML);
}
navButtons[1].onclick = function() {
    upLevel(navButtons[1].innerHTML);
}
navButtons[2].onclick = function() {
    upLevel(navButtons[2].innerHTML);
}
navButtons[3].onclick = function() {
    upLevel(navButtons[3].innerHTML);
}
navButtons[4].onclick = function() {
    upLevel(navButtons[4].innerHTML);
}
navButtons[5].onclick = function() {
    upLevel(navButtons[5].innerHTML);
}
function upLevel(source) {
    if (level == 1) {
        if (source == "Google Books") {
            displayButtons(3, ["WorldCat", "Ancestry", "Hathi Trust"]);
            level++;
        }
        else if (source == "Email") {
            displayButtons(3, ["Other?", "JSTOR", "WorldCat"]);
            level++;
        }
        else if (source == "Ancestry") {
            displayButtons(3, ["Hathi Trust", "C19", "Other2?"]);
            level++;
        }
    } else if (level == 2) {
        if (source == "Other?") {
            displayButtons(2, ["Google Books", "Ancestry"]);
            level++;
        } else if (source == "JSTOR") {
            displayButtons(3, ["Google Books","Hathi Trust", "Ancestry"]);
            level++;
        } else if (source == "WorldCat") {
            displayButtons(2, ["Hathi Trust", "Ancestry"]);
            level++;
        } else if (source == "Ancestry") {
            displayButtons(2, ["Email", "WorldCat"]);
            level++;
        } else if (source == "Hathi Trust" || source == "C19") {
            displayButtons(2, ["WorldCat", "JSTOR"]);
            level++;
        } else if (source == "Other2?") {
            displayButtons(2, ["WorldCat", "C19"]);
            level++;
        }
    } else if (level == 3) {
        if (source == "Google Books" || source == "Hathi Trust") {
            displayButtons(2, ["C19", "Ancestry"]);
            level++;
        } else if (source == "Ancestry") {
            displayButtons(1, ["C19"]);
            level++;
        } else if (source == "Email") {
            displayButtons(2, ["WorldCat", "C19"]);
            level++;
        } else if (source == "WorldCat") {
            displayButtons(1, ["Email"]);
            level++;
        } else if (source == "JSTOR") {
            displayButtons(2, ["WorldCat","Email"]);
            level++;
        } else if (source == "C19") {
            displayButtons(2, ["WorldCat", "Google Books"]);
            level++;
        }
    } else if (level == 4) {
        if (source == "Ancestry" || source == "C19" || source == "WorldCat" || source == "Email") {
            displayButtons(1, ["More Other?"]);
            level++;
        } else if (source == "Google Books") {
            displayButtons(2, ["JSTOR", "Email"]);
            level++;
        }
    } else if(level == 5) {
        displayButtons(0, []);
        var testi = document.getElementById('Testi');
        testi.innerHTML = "This is where the final report would go!";
        testi.style.fontSize = "32px";
    }
}
