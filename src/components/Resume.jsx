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
                        <p><strong>Production assistant and news editor</strong></p>
                        <p>Edited and distributed news video to CNN affiliates using Premiere Pro. </p>
                    </div>
                    <div class="rightcolumn">
                        <p>-- 04/2019 to present --</p>
                    </div>  
                </div>
                
                <div class="row">
                    <div class="leftcolumn">
                        <h3>Remote Workforce Strategy Team</h3>
                        <p><strong>Technology Team Lead</strong></p>
                        <p>Connected with multiple CNN bureaus to discuss technological needs to sustain a continued hybrid work model. Established a technology knowledge datgabase to streamline training and 3ease transitions to new technologies.</p>
                    </div>
                    <div class="rightcolumn">
                        <p>-- 01/2021 to 10/2021 --</p>
                    </div>
                </div>

                <div class="row">
                    <div class="leftcolumn">
                    <h3>KVUE News ABC, Austin</h3>
                    <p><strong>Lead news editor</strong></p>
                    <p>Nightbeat newscast</p>
                    </div>
                    <div class="rightcolumn">
                        <p>-- 02/2018 to 04/2019 --</p>
                    </div>
                </div>

                <div class="row">
                    <div class="leftcolumn">
                    <h3>CNN Atlanta</h3>
                    <p><strong>Intern</strong></p>
                    <p>Southeast Regional Bureau</p>
                    </div>
                    <div class="rightcolumn">
                        <p>-- 06/2017 to 07/2017 --</p>
                    </div>
                </div>

                <div class="row">
                    <div class="leftcolumn">
                        <h3>University Star, university newspaper</h3>
                        <p><strong>Photographer</strong></p>
                    </div>
                    <div class="rightcolumn">
                        <p>-- 01/2016 to 05/2016</p>
                    </div>
                </div>

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

                <div class="row">
                    <div class="leftcolumn">
                    </div>
                    <div class="rightcolumn">
                    </div>
                </div>

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

                <div class="row">
                    <div class="leftcolumn">
                    </div>
                    <div class="rightcolumn">
                    </div>
                </div>

                <h1>REFERENCES</h1>
                
            </div>
        </div>

    );
}

export default Resume;