import React from "react";
import { AuthBtn } from "./Buttons";
import Nav from "react-bootstrap/Nav";

function MainSection() {
  return (
    <div className="main-container">
      <video src="/videos/video.mp4" autoPlay loop muted />
      <h1>FITNESS AWAITS</h1>
      <p>We help you plan your nutrition and workouts.</p>
      <div class="main-btns">
        <Nav.Link href="/signup">
          <AuthBtn className="get-started">GET STARTED</AuthBtn>
        </Nav.Link>
      </div>
    </div>
  );
}

export default MainSection;
