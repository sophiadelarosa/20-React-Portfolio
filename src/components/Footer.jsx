import React from 'react';
import '../styles/Footer.css';
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <a href="https://github.com/sophiadelarosa" target="_blank"><DiGithubBadge /></a>
            <a href="https://www.linkedin.com/in/sophia-de-la-rosa-37057b153/" target="_blank"><FaLinkedin /></a>
            <a href="https://www.twitch.tv/utopiastreemz" target="_blank"><FaTwitch /></a>
        </footer>
    );
}

export default Footer;