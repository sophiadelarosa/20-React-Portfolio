import React from 'react';
import '../styles/Resume.css';

function Resume() {
    return (
        <div class="container">
            <div class="row align-items-start">
                <div class="col-3">
                    <div class="title"><a href="./public/assets/SophiaDeLaRosa.pdf" target="_blank">Resume</a></div>
                </div>
                <div class="col-6 main">

                    <h1>WORK EXPERIENCE</h1>
                    <h3>CNN Atlanta</h3>
                    <p class="description">Production assistant and news editor -- 02/2019 to present</p>
                    <h3>KVUE News ABC, Austin</h3>
                    <p class="description">Lead news editor, daybreak and nightbeat newscasts -- 02/2018 to 04/2019</p>
                    <h3>CNN Atlanta</h3>
                    <p class="description">Intern, Southeast Regional Bureau 06/2017 to 07/2017</p>
                    <h3>University Star, university newspaper</h3>
                    <p class="description">Photographer</p>

                    <h1>EDUCATION</h1>
                    <h3>Texas State University</h3>
                    <p class="description">Bachelor of Science: Journalism</p>
                    <p class="description">Minor: International Studies</p>
                    <p class="description">GPA: 3.19</p>
                    <h3>Pellissippi State Community College</h3>
                    <p class="description">Dual-enrollment English 1310 and English 1320</p>
                    <h3>Grace Christian Academy</h3>
                    <p class="description">National Honor Society</p>
                    <p class="description">Yearbook staff Lead Photo Editor and Head Photojournalist</p>
                    <p class="description">AP classes: English, Studio Art</p>

                    <h1>Awards & Achievements</h1>
                    <p class="description">1st place in Mixed Media -- Advanced Studio Art piece</p>
                    <p class="description">1st Place Women's 13.5 meter competition -- Archery</p>
                    <p class="description">Distinguished Student Award -- Fine Arts</p>

                    <h1>Interests & Skills</h1>
                    <p class="description">Georgia Tech certified full stack web developer</p>
                    <p class="description">Technologies: HTML, CSS, JavaScript, Bootstrap</p>
                    <p class="description">Adobe Suite: Premiere Pro, Photoshop, Illustrator</p>
                    <p class="description">iNews, NewsApps</p>
                    <p class="description">Special interests: international relations, astrophysics</p>
                    <p class="description">PC building</p>
                    <p class="description">Photography</p>
                    <p class="description">PADI certified scuba diver</p>
                    <p class="description">Archery</p>
                </div>
            </div> 
        </div>
    );
}

export default Resume;