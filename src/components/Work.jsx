import React from 'react';
import '../styles/Work.css';

function Work() {
    return (
        <div>
            <div>
                <h1 class="title">Portfolio</h1>
            </div>


            <a href="https://pwa-text-editor-19.herokuapp.com/" target="_blank"><h2> PWA Text Editor </h2></a>
            <a href="https://github.com/sophiadelarosa/19-PWA-text-editor" target="_blank"><p> See the repository </p></a>
            <div id="row">
                <div id="columnleft">
                    <img id="pwatexteditor" />
                </div>
                <div id="columnright">
                    <p> This is a single page text editor application that runs in the browser and meets the PWA criteria. It features data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.</p>
                </div>
            </div>
            

            <a href="https://www.dropbox.com/s/ubuezk0sg6hi4xt/18-No-SQL-API.mp4?dl=0" target="_blank"><h2> NoSQL Social Network API </h2></a>
            <a href="https://github.com/sophiadelarosa/18-NoSQL-Social-Network-API" target="_blank"><p> See the repository </p></a>
            <p> This is an API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, the Mongoose ODM, and the native JavaScript Date object to format timestamps.</p>

            <h2> Regex Tutorial </h2>
            <a href="https://github.com/sophiadelarosa/17-Regex-Tutorial" target="_blank"><p> See the repository </p></a>
            <p> The regex in this tutorial is used to match an HTML tag. This tutorial will break down the regex's different components as shown in the table of contents. </p>

            <a href="https://dungeons-devs.herokuapp.com/" target="_blank"><h2> Dungeons & Devs </h2></a>
            <a href="https://github.com/wtguenthner/Dungeons-Devs/branches" target="_blank"><p> See the repository </p></a>
            <img id="project2" />
            <p> Dungeons & Devs is a turn-based battle game. The user chooses from a character list, each with different strengths, and battles a boss using cards that boost various character stats.</p>

            <a href="https://www.dropbox.com/s/dc0te6egx24dlr8/ORMretailbackenddemo.mp4?dl=0" target="_blank"><h2> Object-relational mapping (ORM) E-Commerce back-end </h2></a>
            <a href="https://github.com/sophiadelarosa/13-ORM-E-Commerce-Back-End" target="_blank"><p> See the repository </p></a>
            <p> Use this CLI application to manage your internet retail company's database and easily view all or individual categories, products and tags, create new ones or delete them. This e-commerce site back end uses an Express.js API and Sequelize to interact with a MySQL database.</p>

            <h2> Express.js Note Taker </h2>
            <a href="https://github.com/sophiadelarosa/express-note-taker" target="_blank"><p> See the repository </p></a>
            <img id="expressnotetaker" />
            <p> This Note Taker application can be used to write and save notes using an Express.js back end and will save and retrieve note data from a JSON file. Clone the repository and install Node. Run "npm i" to install the dependencies and then "npm start" to run the server. This server runs on port 5000. View the page by typing "localhost:5000" in your browser. </p>

            <a href="https://www.dropbox.com/s/hcjlbvinlwxzm49/teamprofilegeneratordemo.mp4?dl=0" target="_blank"><h2> Object-Oriented Programming: Team Profile Generator </h2></a>
            <a href="https://github.com/sophiadelarosa/10-Team-Profile-Generator" target="_blank"><p> See the repository </p></a>
            <img id="teamprofile" />
            <p> This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. This application uses Jest for testing.</p>

            <a href="https://sophiadelarosa.github.io/group-project/" target="_blank"><h2> MUSIC DISCOVERY APP </h2></a>
            <a href="https://github.com/sophiadelarosa/group-project" target="_blank"><p> See the repository </p></a>
            <img id="project1" />
            <p> IMDA is an international music discovery app. It utilizes Spotify's API to search for songs by country and genre, which the user is then able to favorite and view in their favorites list on their profile page.</p>

            <a href="https://sophiadelarosa.github.io/05-Workday-Scheduler/" target="_blank"><h2> Day Planner using third-party APIs </h2></a>
            <a href="https://github.com/sophiadelarosa/05-Workday-Scheduler" target="_blank"><p> See the repository </p></a>
            <img id="dayplanner" />
            <p> Use this simple planner to schedule your day by filling in tasks into the hour timeblocks. The date is listed at the top of the page and will always be correct. Hitting the save button after writing in the textbox will save your input, even on refreshing the page. Hour blocks are color coded based on the current time, which updates every 15 seconds. Past timeblocks have a gray tab, future timeblocks are tabbed in green and the current timeblock is highlighted in yellow.</p>

            <a href="https://sophiadelarosa.github.io/04-Code-Quiz/" target="_blank"><h2> Web API Code Quiz </h2></a>
            <a href="https://github.com/sophiadelarosa/04-Code-Quiz" target="_blank"><p> See the repository </p></a>
            <img id="codequiz" />
            <p> This is a single page text editor application that runs in the browser and meets the PWA criteria. It features data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.</p>

            <h2> JS Password Generator </h2>
            <a href="https://github.com/sophiadelarosa/03-Password-Generator" target="_blank"><p> See the repository </p></a>
            <img id="passwordgenerator" />
            <p> This generator uses a function to generate a random number which is used to select characters in dataset strings. Each dataset string is only included if the user confirms the criteria. The new randomized password is then returned to the textbox on the page.</p>
        </div>
    );
}

export default Work;