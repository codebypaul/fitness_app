import React from 'react'
import { AuthBtn } from './Buttons'
import './MainSection.css';

function MainSection() {
    return (
        <div className='main-container'>
            <video src="/videos/video.mp4" autoPlay loop muted />
            <h1>FITNESS AWAITS</h1>
            <p>We help you plan your nutrition and workouts.</p>
            <div class="main-btns">
                <AuthBtn>
                    GET STARTED
                </AuthBtn>
            </div>
        </div>
    )
}

export default MainSection
