import React from 'react';
import bg from './Images/career.png'
import './Flutter.css'

const Flutter = () => {
    return(
        <div>

            <div class='career'>
                <img src={bg}/>
            </div>

            <div class='writeup'>
                <div><h2>Career Coaching</h2></div>
                <div><p>We offer periodic FREE career coaching to mid-senior level managers.<br />We help you review your career path, optimse your CV to land bigger<br />roles, prep you for interview and negotiations.</p></div>
                <div>
                    <a href='#'><button class='btn'>LEARN MORE</button></a>
                </div>
            </div>

        </div>
    )
}
export default Flutter