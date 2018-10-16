var start = document.getElementById('start')
var navButtons = document.getElementsByClassName('navButtons');
var level = 1;
var points = 0;

start.onclick = function() {
    start.style.display = "none";
    vid.style.display = "none";
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
    document.getElementById('head').style.display = "inline-block";
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
        displayButtons(1, ["Final Report"]);
        level++;
    } else if(level == 6) {
        var intro = document.getElementById('Intro');
        intro.innerHTML = "";
        var testi = document.getElementById('Testi');
        if (points > 6) {
            testi.innerHTML = "CONGRATULATIONS! You successfully uncovered a lot of information about the author you were researching.  At times, the task of finding new information may have seemed impossible, but you persevered.  Often times in research such as this, no information can be found and there is a bit of luck involved, but other times it takes a dedicated person to continue to push through and research.  Because you used many of the different resources at your disposal, your research attempt was thorough and you were able to piece together many small pieces of information and learn a significant amount about your author.  This is a huge accomplishment and something you should be very proud of! At this point, now that the research task is completed (for now, because research is never fully over), we would suggest writing either a Wikipedia article or a Baldwin Biography.  Again congratulations on your research project!"

        } else if (points > 2) {
            testi.innerHTML = "You found a good bit of valuable information on your author. However, there still may be more information out there for the next researcher to find. Your researching time has come to an end, but you have provided a great starting point with information and resources for the next person to continue your work. Take this time to reflect on your process and everything you learned. What do you think worked well? What do you think you could have done better? How can you use what you learned during this process for future projects? Whatever the answers may be, the important thing is that you finished, and you did great work. Congratulations!"
        } else {
            testi.innerHTML = "Missing Nothing Testimonial."
        }
        document.getElementById('Website').style.display = "inline-block";
        document.getElementById('head').style.display = "none";
        document.getElementById('b1').style.display = "none";
    }
}

function changeTest(source) {
    var intro = document.getElementById('Intro');
    var testi = document.getElementById('Testi');
    var rand = Math.floor(Math.random() * Math.floor(3));
    if(source == "WorldCat") {
        intro.innerHTML = "You have chosen to use WorldCat. WorldCat is an online database that catalogues the contents of 72,000 libraries from over 170 countries. It is currently the world's largest bibliographic database el. You might find the location of a book of your author on here, or perhaps some document recording their birth, death or marriage.";
        if (rand == 0) {
            testi.innerHTML = "I got advice from the awesome class to try the website “WorldCat.” But this is also one of the websites that I had no success with. I tried searching up my author's name both Louisa and Louise M. Budgen which was written differently in other sites I found. But in this site, my author is not listed in the database. But a similar name showed up which could be a clue. I did also search up the titles of one of the books but only a reprint of the book which doesn't mean anything related to my author Ms. Budgen."

        } else if (rand == 1) {
            testi.innerHTML = "I had seen several other students use WorldCat and find something about their author, but because I had already found a lot of information about my author through other means, I did not use WorldCat till towards the end. I simply searched the database for the name of my author: Frances Thurtle, and found several of her books, some of which I did not know she wrote. Some were scanned in full, so I was able to see some of the illustrations used in her books. Others were only available in hard copy, and because of time constraints, I did not get to see them. Nonetheless, another researcher might be able to use this knowledge and get to see the hard copy books. In the end, WorldCat gave me some supplemental information, such as publication dates and illustrations, but the crux of the information was not found there."
            points++;
        } else if (rand == 2) {
            testi.innerHTML = "WorldCat was a source which had been recommended by name by Professor Fitzsimmons during class, so I made sure to use it early in my search process.  A single search of “Lucy Sarah Atkins Wilson” pulled up a page on the correct author.  Although I was unable to find any biographical data - and WorldCat indicated that it had no record of any works being written about Atkins - over 20 works were listed as being authored by Atkins.  Several of these books I had already found from other sources, but many of the works were new.  By following the links of the book titles, I was able to find initial publishing dates and publishers for all of the works, and confirm that they were indeed authored by Atkins.  This was very helpful for my research process, as I could use book titles as search terms in other databases, and I was able to make a section of my wikipedia page dedicated to listing her works.  Generally, WorldCat was very straightforward for me to use, and I found following links from the main Atkins page helpful in finding small additional pieces of information."
            points += 2;
        }
    } else if (source == "Email") {
        intro.innerHTML = "You have chosen to email someone. Sometimes, you might come across an interesting article or the like, and you may wish to contact the author. The author might have additional records or information that was not used in the article. Other times, you might want to contact the curator of a museum or of a library to ask them about some resource that they have and that you saw online.";
        if (rand == 0) {
            testi.innerHTML = "After turning up empty handed when searching online about my author, I decided that it was time to reach out to other people that may have more information. From what I gathered online, I found three sources that I could contact that may be helpful with this. The first was a professor that wrote a book which referenced my author and the impact one of her books had on the way geography was taught in Great Britain. This professor, Dr. Norcia, taught at SUNY Brockport, and I decided to send her a quick email asking if she had any information pertaining to my author. Although she had no personal information about her, she did have a list of sources that I could try searching with that she used for her research. Although I appreciated her help, the sources she sent turned up with nothing. I also sent an email to a rare book dealer who responded with a kind email saying they had nothing but encouraged me to keep searching, in addition to a museum who featured one of my author's books, that never responded to me."
        } else if (rand == 1) {
            testi.innerHTML = "During my research process, I came across two separate listings for unique collections of papers that belonged to the family of my author, Eliza Rotch Farrar. One collection was held by the New Bedford Whaling Museum, and the other was held by the Massachusetts Historical Society. I promptly emailed the individuals assigned to these collections, but I only ever heard back from the New Bedford Whaling Museum. Here, I was given access to handwritten letters Eliza had sent to various members of her family during her lifetime. Although this was an incredibly interesting find, I was unable to use the information found in these letters because they proved to be unreadable or irrelevant to my research."
            points++;
        } else if (rand == 2) {
            testi.innerHTML = "I contacted multiple sources via email at many points during my search, and it was a great help when I felt stuck in my research. The first person I contacted was a professor at Purdue University who ran a database of Victorian authors under which a short biography about my author was listed. I inquired for more information, and while he was not able to provide me with much more, he pointed me to a few new sources I hadn't yet considered. Later in my research, I contacted three historical societies of counties in England and Scotland where my author lived. I received responses from two, which provided me with census and military records, as well as the picture and inscription of a monument related to my author."
            points += 2;
        }
    } else if (source == "Ancestry") {
        intro.innerHTML = "You have chosen to use Ancestry. Ancestry is an online database that has about 17 billion historical records. You may find birth records, marriage records, death records or other documents related to your author here. You can search for documents using the dates of birth, marriage or death or your author or of their relatives, as well as the name and location of your author.";
        if (rand == 0) {
            testi.innerHTML = "Since I was given my author's full name including her middle initial, I thought tracking her down on Ancestry wouldn't be too difficult. I was wrong. Even though I was able to limit my search to the area I assumed she lived, I still got hundreds of results for people that had the exact same name as my author, and no way of knowing which one was actually my author. I used the ‘academic hedge' to assume about what year she was born, and Ancestry.com provided me with many results from that decade that I still had trouble narrowing down. I finally just chose one document from Ancestry that seemed as relevant as possible to my author, and I assumed it could have been her. But I still could've been wrong! Without knowing her exact birth or death date, it was very difficult to narrow down results and track down my author."
        } else if (rand == 1) {
            testi.innerHTML = "Ancestry.com seemed like the perfect place to find more information about my author, Sara Wood. I had only found a list of books written by my author as was looking for some biographical information to enhance my research. The problem with finding information on Ancestry.com is that you need to know, at the least, some details about the person you are researching. I only had a name and a country. Sara Wood, as it turns out, was a relatively popular name in 19th century England so I was given over 1000 possible results. Eventually, I was able to manipulate the filters on Ancestry.com to find the address of a Sara Wood who was a bookseller. I assume this was my author and so Ancestry.com did help me a little, but it did not revolutionize my research."
            points++;
        } else if (rand == 2) {
            testi.innerHTML = "Ancestry was the first major source I used for my research process. Upon initially searching my author, Mara L. Pratt-Chadwick, I discovered a unique document which showed my author on a list of graduates of Boston University's medical school. It was profound to see my author being a doctor of medicine in the Victorian era. The next document i found confirmed her status as a doctor and provided a home address of my author before she went to Boston University. This home address led me to finding information about her family, including her father, her father's occupation and death date. Using Ancestry, I found it quite easy to link information about my author to her life. Due to her very unique name, the search came back with very specific results."
            points += 2;
        }
    } else if (source == "JSTOR") {
        intro.innerHTML = "You have chosen to use JSTOR. JSTOR is a digital library that was founded in 1995. It houses scans of books, journals and primary documents search as birth, marriage or death records. Content is provided by over 900 publishers. Since JSTOR is a digital library, all content is scanned, so you do not have to wait to see your documents.";
        if (rand == 0) {
            testi.innerHTML = "I tried JSTOR because Ms. Viars, our librarian, recommended it and I'd had good experiences with the site for prior projects. Using the keywords Emily Willement, I didn't find any relevant results. To broaden the search, I used just Willement as a keyword but again found nothing relevant (I only got results for Thomas Willement, a stained-glass artist). After trying JSTOR, since it was one of the last general databases I tried, I began contacting local historical societies."
        } else if (rand == 1) {
            testi.innerHTML = "I used JSTOR frequently in high school, so it was one of the first resources I turned to during my research. Searching for my author's name, Annie Chase, returned only one result: a journal clipping in which one of her books was mentioned. By googling the name of this new book, I found scanned pages of it on Amazon.com as well as several other of her novels. Thus, JSTOR served as an important catalyst in my research."
            points++;
        } else if (rand == 2) {
            testi.innerHTML = "I decided to attempt JSTOR because it was one of the databases on the list I was progressing through.  I began by searching variations of my author's name, including 'Sarah Atkins' and 'Lucy Sarah Atkins Wilson,' but ultimately found nothing.  Next, I began searching titles of her books.  A search for “The India Cabinet Opened” led me to an article published in the Princeton LIbrary Chronicle, which discussed Atkins and several other female authors of the time.  I was able to use this article as a springboard to further research as well, by examining the sources it cited as well as contacting the author of article for additional information.  All in all, JSTOR was well laid out, easy to use, and did a decent job of narrowing search results so that it was evident from the start whether or not my keywords would turn up anything relevant. "
            points += 2;
        }
    } else if (source == "Hathi Trust") {
        if (rand == 0) {
            testi.innerHTML = "There is not much to write about HathiTrust other than just to explain how I got it and what it gave me. It all started when students were giving ideas about what sites to use and they spoke about HathiTrust which I had not tried before we all met. So I immediately rushed through the School Library website and went to Alphabet databases, found the HathiTrust website and did a basic search of my author and 'No Result' appeared, and I immediately knew there wouldn't be any information about my author Louisa M. Budgen. But that did not stop me from trying to search the books she wrote to see if anything would show up then. There really was no information other than the books itself, and the name was written as the last name first under the books. I learned that even if I simply search the name, that might not be the order of how database has written the name."
        } else if (rand == 1) {
            testi.innerHTML = "Using HathiTrust was not one of my first steps in my research process, but rather something I looked into towards the end of the project.  After quite a bit of research through other sources, I was prompted to try HathiTrust after discussing in class the various methods my peers were using and their success stories.  Unfortunately, I was unsuccessful in unfolding any information on my author, but I was able to find evidence and information on her son, who was also an author.  Fortunately, this information regarding her son led me to discovering more information about him and his siblings through other sources.  This new lead helped give me a better sense of my author in her family life, and influence on her children.  With this information, I was better able to write her biography and include biographical info on her family for my Wikipedia page."
            points++;
        } else if (rand == 2) {
            testi.innerHTML = "I was able to found a considerable amount of information from HathiTrust--definitely my most helpful source. Just from a quick search, I was able to find a number of Lucy Peacock's works with publication dates, locations, and publishers. This led me to some useful information about her anonymous writings versus the ones with her name, the identities of those with whom she co-authored, and her many dedications, none of which were to a husband, family member, or child. The only specific name I discovered was her dedication 'by permission, to the Princess Mary.''"
            points += 2;
        }
        intro.innerHTML = "You have chosen to use HathiTrust. HathiTrust is an online database that was founded in 2008. It houses digital content from other sources such as Google Books or the Internet Archive, as well as content digitalized by libraries themselves. You may find your author's books or some of their birth, marriage or death records.";
    } else if (source == "Google Books") {
        if (rand == 1 || rand == 0) {
            testi.innerHTML = "Google Books helped me find my author's name listed in several magazines and newspapers, which led me to discovering more about her and finding more of her publications. I also was able to confirm my author's pseudonym through two different Google Books, which was an important discovery in my research process. Google Books was a useful source for me as a 'fact checker,' however, I wasn't able to find anything else about my author through Google Books."
            points+=rand;
        } else if (rand == 2) {
            testi.innerHTML = "I was led to Google Books after a quick Google search of my author's and father's names.  Through Google books, I discovered an archived British newspaper from when my author lived that contained a public announcements section.  In that section, there was a small blurb announcing my author's marriage.  Through this article, I learned where and when she was married, as well as her husband's name, which allowed me to make many connections with what I learned from Ancestry and other sources."
            points += 2;
        }
        intro.innerHTML = "You have chosen to use Google Books. Google Books is a digital library that contains digitalized versions of over 25 million books. You may find a book by your author here, or maybe even a scan of a record pertaining to your author.";
    } else if(source == "C19") {
        intro.innerHTML = "You have chosen to use C19. C19 is an online database that stores information about periodicals, books, official documents, newspapers and archives from the nineteenth century. It currently has information about more than 1.7 million books and official publications. You may find a book by your author, or information relating to their life on here.";
        if (rand == 0) {
            testi.innerHTML = "I originally found the database C19 through the Georgia Tech Library website. Through here, I searched for all of the names that my author was recorded under: Eliza Ware Farrar, Mrs. John Farrar, and Eliza Rotch. I was able to find several mentions of her in the American Annals of Education, and I also found listings for two different collections of papers that belonged to her family. Although this database did not provide direct access to these sources, it provided me with new leads for my research process into the life of Eliza Ware Farrar."
        } else if (rand == 1) {
            testi.innerHTML = "After continuously hearing about C19 from my peers and its usefulness, I decided to check it out.  It took quite a while and several search attempts to find anything about my author.  In the end, I refined my searches quite a bit, used her various pen names, and ultimately, I found more information about her children than my own author.  However, discovering information on her children was able to help me piece together information from other sources and learn more about my author with regards to her family life."
            points++;
        } else if (rand == 2) {
            testi.innerHTML = "After seeing on Twitter, as well as overhearing in class, that many students seemed to have found a lot of information about their authors using the source C19. I decided to give it a try, and searched through the online archive with different magazines, articles, etc. I simply typed in the name of my author, Mary Anne Venning, since that was the only personal information I had about her, and unfortunately it turned up with nothing. It simply brought up some irrelevant articles from time periods before my author was even alive. I decided that this source was a dead end for me, but at least it was an option that I explored."
            points += 2;
        }
    } else if(source == "Other" || source == "Other Source") {
        intro.innerHTML = "You have chosen to use other. When doing research, you never know what kind of source you can expect you find, and sometimes the answer may surprise you. Other sources include chat forums, articles, books, photos and more. You may find information that you can find nowhere else by using other."
        if (rand == 0) {
            testi.innerHTML = "Sample No Info Other Testimonial."
        } else if (rand == 1) {
            testi.innerHTML = "Sample Some Info Other Testimonial."
            points++;
        } else if (rand == 2) {
            testi.innerHTML = "Sample A Lot of Info Testimonial."
            points += 2;
        }
    }
}
