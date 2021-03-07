# Boston Covid Tutoring Website


## Introduction

[Boston Covid Tutoring](https://bostoncovidtutoring.org/) is a free tutoring service for young students in the Boston area. This repo is dedicated to BCT's [website](https://bostoncovidtutoring.org/).

## Contributing

If you are thinking about contributing to the website, thank you for trying to help!

Here's what you need to know to get started

- Only push to the development branch
- Pushing (or merging) to master will trigger a Github action that **automatically publishes the website**
	- So please never do this unless your code has been reviewed and approved.
- We have created a [template](https://github.com/dphiggins/BCT-website/blob/master/public/assets/template.html) for our webpages. Use this to get started easily.
- Development is hosted on Github Pages through https://dphiggins.github.io/BCT-website/public/. The default link doesn't work since the root directory can't be set to "/public".

Below are a list of features we still need to add, in order of importance. Please feel free to get started on any open features.

1. Small Updates
	- Change "senior management" to "senior leadership"
	- Update David's Bio. 
	- Change Graham to Gold color
	- Add Julia Torrey HR, Milton Academy, Sophomore. Emma Tung - junior Milton Academy, Outreach. Jeremy Hwang - junior Milton Academy, Development. Conrad Brown - junior Milton Academy, Development
	- Enrichment course --> change to 0. (say under Buisness class "no longer available for registration")
	- Move QnA to about page
	- About page img4 not working
	- Change all "Greater Boston" phrase to "Massachusetts"

2. Update Team Page (Dan)
	- Create dropdown of Senior management and Directory
	- ~~Directory needs colors, give some kind of decoration to each person's name (maybe a block)~~
		- Need to figure out the mininum margin for each block, and then use javascript to move blocks
		- Add everyone in
		- **Automate moving blocks**
		- ~~See if animation is visible (just use transition and then change top and left px)~~

3. Create Locations tab and Naples Page (Unassigned)
	- Naples and Boston (highlight Boston is our HQ)
	- Tutees and Tutors in each location should sign up through different links and forms
	- Might make most sense to add a drop down of locations under sign up and Volunteer for now

4. Create Server Side database and logic for automation (Dan)
	- Tutor and Tutee Database
	- Automatic Tutee Assignment
	- Web Interface for Admins to easily manage tutors and tutees

5. Add electronic signature under the Sign Up form (Unassigned)

6. Add a contact page for email and social media. (Unassigned)


7. Redesign the footer (Dylan)
	- Add Dan
	- Change color
	- Rearrange existing items
	- Add mission statement or description
