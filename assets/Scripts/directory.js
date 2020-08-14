var fr = new FileReader(); // temperory: reading from local file

fr.readAsText("../data/tutors.json")
var directoryOBJ = JSON.parse(fr.result); // getting tutors.json as an object

fr.readAsText("../data/tutorList.txt")
var tutorsList = JSON.parse(fr.result); // getting an array of tutor names

function showAllSelectedCard() {
	/*
	Process: Runs whenever a filter changes
			 Monitors and updates filter status
	Output: calls showCard() on all names selected by the filters
	*/
}

function showCard(name, id) {
	/*
	Input: (STRING) Name of tutor, (STRING) id of HTML element
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