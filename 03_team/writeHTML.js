// Creating a list of HTML elements with id="name_#", where # goes from 0 to the number of names in the directory
axios.get('../assets/data/tutorList.json')
  .then(response => {
	console.log("Getting tutorList data");
	for (var i = 0; i < response.length; i++) {
			document.write(`<p id="name_${i}"></p>`);
		}
  })
  .catch(error => {
	console.error(error);
	weatherString = "tutorList not available"
  });