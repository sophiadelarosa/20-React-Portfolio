import React from 'react';
import '../styles/Work.css';

function Work() {
    return (
        <div class="container">
            <div class="row align-items-start">
                <div class="col-3">
                    <div class="title">Portfolio</div>
                </div>
                <div class="col-9 main">
                    <a href="https://dungeons-devs.herokuapp.com/"><h1> DUNGEONS & DEVS </h1></a>
                    <img id="project2" src="./assets/images/D&D.png"/>
                    <p> Dungeons & Devs is a turn-based battle game. The user chooses from a character list, each with different strengths, and battles a boss using cards that boost various character stats.</p>
                    
                    <a href="https://sophiadelarosa.github.io/group-project/"><h1> MUSIC DISCOVERY APP </h1></a>
                    <img id="project1" src="./assets/images/imda.png"/>
                    <p> IMDA is an international music discovery app. It utilizes Spotify's API to search for songs by country and genre, which the user is then able to favorite and view in their favorites list on their profile page.</p>
                    
                </div>
            </div>
        </div>
    );
}

export default Work;