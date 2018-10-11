var start = document.getElementById('start')
start.onclick = function() {
    console.log("hi");
    start.style.display = "none";
    displayButtons(3, ["HathiTrust","C19","AncestryLibrary"]);

}

function displayButtons(num, buttonNames) {
    var navButtons = document.getElementsByClassName('navButtons');
    for(i=0; i<num; i++) {
        navButtons[i].style.display="inline-block";
        navButtons[i].innerHTML = buttonNames[i];
        console.log(buttonNames[i]);
    }
    for(i=num; i<navButtons; i++) {
        navButtons[i].style.display="none";
    }
}
