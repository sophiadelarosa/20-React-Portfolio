import React from 'react';
import '../styles/Resume.css';
import resume from "../assets/SophiaDeLaRosa.pdf";

function Resume() {
    return (

        <div>
            <div>
                <div class="title">Resume</div>
                <div><a href={resume}>Download my resume here.</a></div>
            </div>
            <div>
                <h1>EXPERIENCE</h1>
                <div class="row">
                    <div class="leftcolumn">
                        <h3>CNN Atlanta</h3>
                        <p>Production assistant and news editor </p>
                        <p>Edited and distributed news video to CNN affiliates using Premiere Pro. </p>
                    </div>
                    <div class="rightcolumn">
                        <p>-- 04/2019 to present --</p>
                    </div>  
                </div>
                
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

                <h1>TECHNICAL SKILLS</h1>
                <p class="description">Georgia Tech certified full stack web developer</p>
                <p class="description">Technologies: HTML, CSS, JavaScript, Bootstrap</p>
                <p class="description">Adobe Suite: Premiere Pro, Photoshop, Illustrator</p>
                <p class="description">iNews, NewsApps</p>
                <p class="description">Special interests: international relations, astrophysics</p>
                <p class="description">PC building</p>
                <p class="description">Photography</p>
                <p class="description">PADI certified scuba diver</p>
                <p class="description">Archery</p>
                <p class="description">1st place in Mixed Media -- Advanced Studio Art piece</p>
                <p class="description">1st Place Women's 13.5 meter competition -- Archery</p>
                <p class="description">Distinguished Student Award -- Fine Arts</p>

                <h1>REFERENCES</h1>
                
            </div>
        </div>

    );
}

export default Resume;