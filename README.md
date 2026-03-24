# Gotham-City_Archive
The Gotham City Archive is a digital hub that provides information about the "Bat-Family" and their rogues gallery; it collates real-time information from a publicly available web interface using a combination of HTML, CSS and JavaScript with a focus on employing modern, asynchronous fetch requests to get statistical data about Bat-Family members.

**1. Project Purpose**

Designed to allow The World's Greatest Detective to track and analyze the members of the "Bat-Family" as well as their enemies, the Gotham City Archives is an extremely high-performing web interface that acts as a comprehensive database of over 450 unique characters within the DC Comics Universe allowing users to access vast amounts of biography, power statistics and connection data via an easy-to-use searchable interface.
This project demonstrates proficiency with current JavaScript paradigms, in particular, Array Higher-Order Functions (HOFs) and modern methods of retrieving data asynchronously from a live RESTful API.



**2. The API**

Furthermore, The Gotham City Archives uses Akabab's Superhero API, a fully categorized RESTful data stream that provides detailed information about characters from many of history's comic book publishers (i.e., Marvel and DC Comics).

Base URL: https://akabab.github.io/superhero-api/api/ 

Primary Endpoint: /all.json (to fetch the complete character roster) 

Data Type: JSON objects containing powerstats (intelligence, strength, etc.), appearance, biography, and work.



**3. Key Features (Milestone 3 Preview)**

In order to satisfy the functional requirements of the project, the following interactions will be built entirely utilizing Array HOFs (.map(), .filter(), .sort(), .find(), etc).

Batsearch (Search): Live keyword search for discovering either heroes or villains by name and/or their alias.

Rogue's Gallery (Filtering): Ability to filter out characters based on their alignment (Good vs. Evil) and publisher (DC Comics).

Tactical Analysis (Sorting): Characters can be sorted based off of their power stats to/for example; find the "Most Intelligent" or "Strongest" characters.

Dark Mode Toggle: A theme switcher to allow users to have a "Gotham at Midnight" type experience, to improve the experience when using the app in low light situations.

**4. Technologies:**

Frontend - HTML5, CSS (using custom Flexbox/Grid to achieve "Bat-Computer" style layout materials).

Logic - Javascript for fetching and manipulating data via fetch request.

Deployed On - Netlify or Vercel.


**5. SETUP**

To set up the project on your computer for development and test use, follow these steps:

Requirements
Git - to download the repository.

Node.js and npm - Only if using React to provide package management and run the dev server.

1. Download the repository.
   
Go through your terminal or command prompt and type:

git clone https://github.com/your-username/gotham-city-archive.git

then

cd gotham-city-archive

to navigate to project directory


2. Installations
   
If using JavaScript, no installation is needed, you're good to go!

If using React, you will need to install some packages that will be installed by:

npm install

3. Run the application
   
If using JavaScript:
Just find the index.html file in the root directory and open it in a modern web browser (such as Chrome, Firefox, or Edge). You can also use the "Live Server" extension with VS Code so you can see changes as you make them.

If using React:
Run this command to start the local development server:

npm start

The application will automatically open at http://localhost:3000.
