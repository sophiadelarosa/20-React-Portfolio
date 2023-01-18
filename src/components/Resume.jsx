import React from 'react';
import '../styles/Resume.css';
import resume from "../assets/SophiaDeLaRosa.pdf";

function Resume() {
    return (

        <div>
            <div>
                <div class="title">Resume</div>
                <div id="resume"><a href={resume}>Download my resume here.</a></div>
            </div>
            <div>
                <h1>EXPERIENCE</h1>

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
                        <h3>CNN Atlanta</h3>
                        <p><strong>Production assistant and news editor</strong></p>
                        <p>Editing and distributing news video to CNN affiliates using Premiere Pro. </p>
                    </div>
                    <div class="rightcolumn">
                        <p>-- 04/2019 to present --</p>
                    </div>  
                </div>

                <div class="row">
                    <div class="leftcolumn">
                    <h3>KVUE News ABC, Austin</h3>
                    <p><strong>Lead news editor </strong> - Nightbeat newscast</p>
                    </div>
                    <div class="rightcolumn">
                        <p>-- 02/2018 to 04/2019 --</p>
                    </div>
                </div>

                <div class="row">
                    <div class="leftcolumn">
                    <h3>CNN Atlanta</h3>
                    <p><strong>Intern </strong>- Southeast Regional Bureau</p>
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
                        <p>-- 01/2016 to 05/2016 --</p>
                    </div>
                </div>

                <h1>EDUCATION</h1>

                <div class="row">
                    <div class="leftcolumn">
                        <h3>Georgia Institute of Technology</h3>
                        <p>Certified Full Stack web developer</p>
                    </div>
                    <div class="rightcolumn">
                        <p>-- 04/2022 to 10/2022 --</p>
                    </div>
                </div>

                <div class="row">
                    <div class="leftcolumn">
                        <h3>Texas State University</h3>
                        <p>Bachelor of Science: Journalism</p>
                        <p>Minor: International Studies</p>
                        <p>GPA: 3.19</p>
                    </div>
                    <div class="rightcolumn">
                        <p>-- 08/2014 to 12/2017 --</p>
                    </div>
                </div>
    
    
                <h1>TECHNICAL SKILLS</h1>
                <p>&#x2022; Georgia Tech certified full stack web developer</p>
                <p>&#x2022; Bachelor of Science: Journalism</p>
                <p>&#x2022; Adobe Suite</p>
                <p>&#x2022; iNews, NewsApps</p>
                <p>&#x2022; PC building</p>
                <p>&#x2022; Detail oriented problem solving and debugging</p>
                <p>&#x2022; Communication and leadership</p>

                <h1>REFERENCES</h1>
                <p><strong>Please download my CV above or contact me for a list of references</strong></p>

                <h1>SPECIAL INTERESTS</h1>
                <p>&#x2022; Gaming</p>
                <p>&#x2022; Twitch streaming</p>
                <p>&#x2022; Blender and Unity video game asset modeling</p>
                <p>&#x2022; Astrophysics</p>
                <p>&#x2022; PADI certified scuba diver</p>
                <p>&#x2022; 1st Place Women's 13.5 meter competition -- Archery</p>
                <p>&#x2022; 1st place in Mixed Media -- Advanced Studio Art</p>
                <p>&#x2022; Distinguished Student Award -- Fine Arts</p>
                <p>&#x2022; Photography</p>
                
            </div>
        </div>

    );
}

export default Resume;