// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDTMz_4Oa4qPgKj0gSXvFr2cumNU9NHmEM",
authDomain: "bct-website-aae85.firebaseapp.com",
databaseURL: "https://bct-website-aae85.firebaseio.com",
projectId: "bct-website-aae85",
storageBucket: "bct-website-aae85.appspot.com",
messagingSenderId: "579830059860",
appId: "1:579830059860:web:f95d8e1165b7d3f4aeaec1",
measurementId: "G-JT2D4NZ9RQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var grid = document.getElementById("grid");

var allCards = ["DM", "NB", "DB", "AC", "AL", "BS", "BB", "CBR", "CY", "DH", "ET", "GB", "CB", "JH", "JT", "JW", "LL", "NR", "SK", "TA", "AR", "AM", "FA"];
//If initials repeat, simply include the second letter of their last name (and so on).

updatePage("ALL"); // default to All filter


new ResizeSensor(document.getElementsByTagName("BODY")[0], function() {
    updatePage(document.getElementsByClassName("filtr-active")[0].id);
});

function updatePage(filter) {
	updateFilters(filter);
	updateCards(getValidCards(filter));
}

function updateFilters(filter) {
	// pre: recieves a filter
	// post: updates the active class on the selected filter
	var filterList = ["ALL", "LEADERSHIP", "HR", "DEVELOPMENT", "OUTREACH", "MARKETING", "TECHNOLOGY", "OTHERS"];
	for (var i in filterList) {
		if (filter === filterList[i]) {
			document.getElementById(filterList[i]).classList.add("filtr-active");
		} else {
			document.getElementById(filterList[i]).classList.remove("filtr-active");
		}
	}
}

function getValidCards(filter) {
	// pre: recieves a filter
	// post: returns a list of IDs of cards that match the filter
	var cardList = [];
	for (var i in allCards) { // this for loop also sorts all the cards in the order they are in "allCards"
		if (document.getElementById(allCards[i]).classList.contains(filter) && !document.getElementById(allCards[i]).classList.contains("HIDDEN")) {
			cardList.push(allCards[i]);
		}
	}
	return cardList;
}

function updateCards(cardList) {
	// pre: recieves a list of cards to keep
	// moves those cards to the front, removes all other cards
	var cardWidth = document.getElementById(cardList[0]).offsetWidth; // width of each card
	var cardHeight = document.getElementById(cardList[0]).offsetHeight; // height of each card

	var columns = Math.floor(grid.offsetWidth / cardWidth);
	var rows = Math.floor(cardList.length / columns) + 1;
	var margin = (grid.offsetWidth - (columns * cardWidth)) / (columns - 1);
	grid.style.height = (rows * cardHeight) + "px";
	var left = 0;
	var top = 0;
	for (var i in allCards) {
		if (!(allCards[i] in cardList)) {
			document.getElementById(allCards[i]).style.opacity = "0";
		}
	}
	for (var i in cardList) {
		left += cardWidth + margin;
		if (i % columns == 0) {
			top += cardHeight;
			left = 0;
		}
		if (i == 0) {
			top = 0;
			left = 0;
		}


		document.getElementById(cardList[i]).style.position = "absolute";
		document.getElementById(cardList[i]).style.opacity = "100%";
		document.getElementById(cardList[i]).style.left = left + "px";
		document.getElementById(cardList[i]).style.top = top + "px";
	}
}