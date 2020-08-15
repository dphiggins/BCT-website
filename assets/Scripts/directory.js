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
var logisticsFilter = true;
var hrFilter = true;
var tutorFilter = false;
var otherFilter = true;
showAllSelectedCard() // Show page with the default setting above

// change filter's boolean status when clicked, and also update the selected cards
document.getElementById("outreach").addEventListener("click", () => {outreachFilter = !outreachFilter; showAllSelectedCard();});
document.getElementById("marketing").addEventListener("click", () => {marketingFilter = !marketingFilter; showAllSelectedCard();});
document.getElementById("logistics").addEventListener("click", () => {logisticsFilter = !logisticsFilter; showAllSelectedCard();});
document.getElementById("hr").addEventListener("click", () => {hrFilter = !hrFilter; showAllSelectedCard();});
document.getElementById("tutors").addEventListener("click", () => {tutorFilter = !tutorFilter; showAllSelectedCard();});
document.getElementById("others").addEventListener("click", () => {otherFilter = !otherFilter; showAllSelectedCard();});


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
					showCard(tutorsList[tutorIndex], `name_${id}`, directoryOBJ);
					id++;
				} else {
					document.getElementById(`name_${id}`).innerHTML = "";
				}
			}
		});
	});
}

function isValidName(name, directoryOBJ) {
	/*
	Input: (STRING) Name of tutor, (OBJ) JSON object of Tutors
	Output: returns a boolean indicating whether or not the name matches the currently selected filters
	*/
	console.log("name: " + name);
	console.log("Directory name: " + directoryOBJ[name]);
	var positionsList = directoryOBJ[name].position;

	for (var i in positionsList) {
		if (positionsList[i] === "Director of Outreach" && outreachFilter) {return true;}
		if (positionsList[i] === "Marketing Team Member" && marketingFilter) {return true;}
		if ((positionsList[i] === "Logistics Member" || positionsList[i] === "Director of Logistics") && logisticsFilter) {return true;}
		if (positionsList[i] === "Co-Director of Human Resources" && hrFilter) {return true;}
		if (positionsList[i] === "Tutor" && tutorFilter) {return true;}
		if ((positionsList[i] === "Development Team Member" ||
			positionsList[i] === "Director of Development Team" ||
			positionsList[i] === "Enrichment Course Instructor" ||
			positionsList[i] === "Website Assitant") && otherFilter) {return true;}
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