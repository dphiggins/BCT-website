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

/*-----Reading Data from Database. TODO: Move away from local file-----*/

var directoryPromise = axios.get('../assets/data/tutors.json')
  .then(response => {
  	console.log("Getting tutor data");
  	return response.data;
  })
  .catch(error => {
	console.error(error);
	return null;
  });

var tutorsPromise = axios.get('../assets/data/tutorList.json')
  .then(response => {
	console.log("Getting tutorList data");
	return response.data;
  })
  .catch(error => {
	console.error(error);
	return null;
  });


/*-----Filter. TODO: Make filters look prettier-----*/
var outreachFilter = true;
var marketingFilter = true;
var hrFilter = true;
var tutorFilter = false;
var otherFilter = true;
showAllSelectedCard() // Show page with the default setting above


/*-----Display Functions. TODO: Change innerHTML code to fit the design of the website. Add css formatting-----*/
function showAllSelectedCard() {
	/*
	Process: Runs whenever a filter changes
			 
	Output: calls showCard() on all names selected by the filters
			removes any names not selected by the filters
	*/
	directoryPromise.then((directoryOBJ) => {
		tutorsPromise.then((tutorsList) => {
			var id = 0; // ID is within the range {0 - number of names}
			for (var tutorIndex in tutorsList) {
				if (isValidName(tutorsList[tutorIndex], directoryOBJ)) {
					showCard(tutorsList[tutorIndex], `name_${tutorIndex}`, directoryOBJ);
				} else { 
					document.getElementById(`name_${tutorIndex}`).innerHTML = "";
				}
			}
		});
	});
}

// make something like this: https://www.constructdigital.com/about/our-people (once we have all headshots)

// fill each row until we can't (absolute, specify left and top pixels)
// them move on to the next row

// manually copy and past each box, but just javascript to put in name, img, title, and also position

// Grid fiter --> filter box(flex column) (width changes based on media) --> quote, image, info

// have css classes like "showquote" or "scaleimg" that you can apply with javascript

function updatePage(filter) {
	updateFilters(filter);
	// TESTING
	document.getElementById("AC").style.left = "0px";
	document.getElementById("AC").style.top = "0px";
	document.getElementById("DM").style.display= "hidden";
}

function updateFilters(filter) {
	// pre: recieves a filter
	// post: updates the active class on the selected filter
	var filterList = ["ALL", "LEADERSHIP", "HR", "DEVELOPMENT", "MARKETING", "TECHNOLOGY", "OTHERS"];
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
	var cardList = ["DM", "NB", "DB", "DH", "AC", "AL", "BS", "BB", "CB", "CY", "DA", "GB", "JW", "NR", "SK", "TA"];
}

function isValidName(name, directoryOBJ) {
	/*
	Input: (STRING) Name of tutor, (OBJ) JSON object of Tutors
	Output: returns a boolean indicating whether or not the name matches the currently selected filters
	*/
	var positionsList = directoryOBJ[name].position;

	for (var i in positionsList) {
		if (positionsList[i] === "Director of Outreach" && outreachFilter) {return true;}
		if ((positionsList[i] === "Director of Social Media" || positionsList[i] === "Marketing Team Member") && marketingFilter) {return true;}
		if (positionsList[i] === "Co-Director of Human Resources" && hrFilter) {return true;}
		if (positionsList[i] === "Tutor" && tutorFilter) {return true;}
		if ((positionsList[i] === "Development Team Member" ||
			positionsList[i] === "Director of Development Team" ||
			positionsList[i] === "Enrichment Course Instructor" ||
			positionsList[i] === "Website Assitant" ||
			positionsList[i] === "Director of Logistics") && otherFilter) {return true;}
	}
	return false;
}

function showCard(name, id, directoryOBJ) {
	/*
	Input: (STRING) Name of tutor, (STRING) id of HTML element, (OBJ) JSON object of Tutors
	Output: updates the inner html of the specified HTML element to show tutor info
			Shows Tutor Name and their Position
			Example:
			Dan Bi: Vice President, Tutor
	*/
	var positionsList = directoryOBJ[name].position;
	var positionsString = positionsList[0]; // default string is the first position

	for (var i = 1; i < positionsList.length; i++) { // if there are more positions, loop to get it
		positionsString += ", " + positionsList[i];
	}
	document.getElementById(id).innerHTML = directoryOBJ[name].first + " " + directoryOBJ[name].last + ": " + positionsString;
}