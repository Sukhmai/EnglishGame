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
    changeTest(source);
    if (level == 1) {
        if (source == "Google Books") {
            displayButtons(3, ["WorldCat", "Ancestry", "Hathi Trust"]);
            level++;
        }
        else if (source == "Email") {
            displayButtons(3, ["Other", "JSTOR", "WorldCat"]);
            level++;
        }
        else if (source == "Ancestry") {
            displayButtons(3, ["Hathi Trust", "C19", "Other Source"]);
            level++;
        }
    } else if (level == 2) {
        if (source == "Other") {
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
        } else if (source == "Other Source") {
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
            displayButtons(1, ["Other"]);
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

function changeTest(source) {
    var intro = document.getElementById('Intro');
    var testi = document.getElementById('Testi');
    if(source == "WorldCat") {
        intro.innerHTML = "You have chosen to use WorldCat. WorldCat is an online database that catalogues the contents of 72,000 libraries from over 170 countries. It is currently the world's largest bibliographic database. You might find the location of a book of your author on here, or perhaps some document recording their birth, death or marriage.";
    } else if (source == "Email") {
        intro.innerHTML = "You have chosen to email someone. Sometimes, you might come across an interesting article or the like, and you may wish to contact the author. The author might have additional records or information that was not used in the article. Other times, you might want to contact the curator of a museum or of a library to ask them about some resource that they have and that you saw online.";
    } else if (source == "Ancestry") {
        intro.innerHTML = "You have chosen to use Ancestry. Ancestry is an online database that has about 17 billion historical records. You may find birth records, marriage records, death records or other documents related to your author here. You can search for documents using the dates of birth, marriage or death or your author or of their relatives, as well as the name and location of your author.";
    } else if (source == "JSTOR") {
        intro.innerHTML = "You have chosen to use JSTOR. JSTOR is a digital library that was founded in 1995. It houses scans of books, journals and primary documents search as birth, marriage or death records. Content is provided by over 900 publishers. Since JSTOR is a digital library, all content is scanned, so you do not have to wait to see your documents.";
    } else if (source == "Hathi Trust") {
        intro.innerHTML = "You have chosen to use HathiTrust. HathiTrust is an online database that was founded in 2008. It houses digital content from other sources such as Google Books or the Internet Archive, as well as content digitalized by libraries themselves. You may find your author’s books or some of their birth, marriage or death records.";
    } else if (source == "Google Books") {
        intro.innerHTML = "You have chosen to use Google Books. Google Books is a digital library that contains digitalized versions of over 25 million books. You may find a book by your author here, or maybe even a scan of a record pertaining to your author.";
    } else if(source == "C19") {
        intro.innerHTML = "You have chosen to use C19. C19 is an online database that stores information about periodicals, books, official documents, newspapers and archives from the nineteenth century. It currently has information about more than 1.7 million books and official publications. You may find a book by your author, or information relating to their life on here.";
    } else if(source == "Other" || source == "Other Source") {
        intro.innerHTML = "You have chosen to use other. When doing research, you never know what kind of source you can expect you find, and sometimes the answer may surprise you. Other sources include chat forums, articles, books, photos and more. You may find information that you can find nowhere else by using other."
    }
}
