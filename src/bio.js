import * as React from 'react';
import Selfie from './imgs/IMG_2039.jpeg'

const Bio = () => {
    return (
        <div class="bio">
            <img id="selfie" src={Selfie} alt="selfie" />

            <div class="bio-container">
                <h1 id="bio-title">Biography</h1>
                <p id="bio-info">My name is Christopher Thompson, and I graduated from the University of Mississippi in May of 2020. While attending University I took two data analytics classes and that's where my interest in coding began. I am currently enrolled in General Assembly's Software Engineering Immersive program and will complete it in April of 2022. I have a passion for creating, and driving innovation to help others. I would like to use my skills to continue to help others and build purposeful programs and applications.</p>
            </div>
        </div>
    );
}
export default Bio;

