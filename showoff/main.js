// Click counter
clickCounter();

function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("clicks").innerHTML = localStorage.clickcount;
}


//Alert mouseover
const alertClick = document.querySelector(".alertButton")

alertClick.addEventListener("mouseover", function () {
    alert("Get Hacked");
});


//Alert when leaving the window
document.querySelector("html").addEventListener("mouseleave", function () {
    alert("Don't leave :(");
});



//Form
document.querySelector("#form1").addEventListener("submit", validate);
const messageFailed = document.querySelector("#besked");

function validate(evt) {
    let error;

    if (this.name.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst dit navn!";
        messageFailed.textContent = error;
        this.name.focus();
        return false;
    }

    if (this.email.value == "") {
        evt.preventDefault();
        error = "Udflyd venligst din e-mail adresse!";
        messageFailed.textContent = error;
        this.email.focus();
        return false;
    }

    const atpos = this.email.value.indexOf("@");
    const dotpos = this.email.value.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.email.value.length) {
        evt.preventDefault();
        error = "Din e-mail adresse skal være gyldig (fx navn@mail.dk)!";
        messageFailed.textContent = error;
        this.email.focus();
        return false;
    }

    if (this.comment.value == "") {
        evt.preventDefault();
        error = "Udflyd venligst en kommenter!";
        messageFailed.textContent = error;
        this.comment.focus();
        return false;
    }

};

//Consoles Array
const CONSOLES = [
    {
        console: "PlayStation4",
        published: "2013",
        company: "Sony"
    },
    {
        console: "Xbox360",
        published: "2005",
        company: "Microsoft"
    }


]

CONSOLES.forEach(function (element) {
    document.querySelector("footer").innerHTML +=
        `<h2>${element.console +
        " " +
        "was first released in" +
        " " +
        element.published +
        " " +
        "by" +
        " " +
        element.company}</h2>`
});



//Styling with JS
const FOOTER = document.querySelector("footer")

FOOTER.style.textAlign = "center"
FOOTER.style.paddingTop = "5em"

const BODY = document.querySelector("body")

BODY.style.overflow = "scroll"


//myMovies Array
const SECTION = document.getElementsByClassName("result")

var myMovies = [
    {
        title: "Pacific Rim",
        published: 2013,
        genres: ["sci-fi", "action"],
        actors: ["Idris Elba", "Charlie Day"]
    },

    {
        title: "The Dark Knight",
        published: 2008,
        genres: ["action", "adventure"],
        actors: ["Christian Bale,", "Heath Ledger"]
    },

    {
        title: "Inception",
        published: 2010,
        genres: ["action", "sci-fi"],
        actors: ["Leonardo DiCaprio", "Cillian Murphy"]
    },

    {
        title: "Intersteller",
        published: 2014,
        genres: ["sci-fi", "adventure"],
        actors: ["Matthew McConaughey", "Jessica Chastain"]
    },

    {
        title: "Joker",
        published: 2019,
        genres: ["crime", "drama"],
        actors: ["Joaquin Phoenix", "Zazie Beetz"]

    },

    {
        title: "Man of Steel",
        published: 2013,
        genres: ["action", "adventure"],
        actors: ["Henry Cavill", "Diana Lane"]
    },

    {
        title: "Suicide Squad",
        published: 2016,
        genres: ["action", "adventure"],
        actors: ["Margot Robbie", "Jared Leto"]
    },

    {
        title: "Memento",
        published: 2000,
        genres: ["mystery", "thriller"],
        actors: ["Guy Pearce", "Joe Pantoliano"]

    },

    {
        title: "The Prestige",
        published: 2006,
        genres: ["sci-fi", "drama"],
        actors: ["Michael Caine", "Hugh Jackman"]
    },

    {
        title: "Dunkirk",
        published: 2017,
        genres: ["war", "action"],
        actors: ["Harry Styles", "Fionn Whitehead"]
    }
]


const FORM = document.querySelector(".searchForm")

FORM.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault()

    const RESULTS = myMovies.filter(function (element) {
        return searchTitle(event.target.search.value, element.title)
            || compare(element.published, event.target.search.value)
            || findInArray(element.genres, event.target.search.value)
            || findInArray(element.actors, event.target.search.value)
    })

    RESULTS.forEach(function (element) {
        document.body.innerHTML +=
            
                `<div class="results_div"><p>${element.title + " " + "was first published in" + " " + element.published + ". " + "The movies genres are" + " " + element.genres + " " + "and the two biggest actors are" + " " + element.actors}</p></div>`

    })
}




function searchTitle(keyword, title) {
    return title
        .toLowerCase()
        .includes(
            keyword.toLowerCase()
        )
}

function findInArray(haystack, needle) {
    return haystack.find(function (item) {
        return item.toLowerCase().includes(needle.toLowerCase())
    })

}


const compare = (a, b) => a == b



const guessSumbit = document.querySelector(".guessSumbit");
const guessField = document.querySelector(".guessField");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessList = document.querySelector(".guesses")
const resetButton = document.createElement("button");

//Generate a number between 1 and 100
var randomNum = Math.floor(Math.random() * 100 + 1);

var guessNum = 1;
let error;

document.getElementById("guessSumbit").onclick = function NumberGame() {

    //If the number of guesses is under 10, plus guessNum by 1 and place all guess numbers in a list 
    if (guessNum < 10) {
        guessNum += 1
        var userGuess = document.getElementById("guessField").value;
        guessList.textContent += userGuess + " , "

        //If the number guessed on screen and the random number generated are the same, get a you have guessed correct notification,  and make a high score counter 
        if (userGuess == randomNum) {
            error = "You guessed the right number!";
            lowOrHi.style.backgroundColor = "rgb(0,255,0)";
            lastResult.style.display = "block"
            resetButton.innerHTML = "Reset";
            document.body.appendChild(resetButton);
            resetButton.addEventListener("click", resetGame)
            
            guessField.disabled = true;
            document.getElementById("guessSumbit").disabled = true;
        }
        else if (userGuess > randomNum) {
            lastResult.style.display = "none"
            error = "Try a smaller number!";
            lowOrHi.style.backgroundColor = "rgb(255,0,0)";
        }
        else {
            lastResult.style.display = "none"
            error = "Try a bigger number!";
            lowOrHi.style.backgroundColor = "rgb(255,0,0)";
        }
    } else {
        error = "You can't guess more!";
        resetButton.innerHTML = "Reset";
        document.body.appendChild(resetButton);
        resetButton.addEventListener("click", resetGame)
        guessField.disabled = true;
        document.getElementById("guessSumbit").disabled = true;
        lastResult.style.display = "block"

    }
    lowOrHi.textContent = error;
    lastResult.textContent = "The correct answer was " + randomNum  
    
}

//After clicking reset, reset the function and hide the button and numbers on screen
function resetGame() {
    location.reload();
}

