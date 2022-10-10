import React from "react";
import "./MainContent.css";
function MainContent() {
  return (
    <div>
      <h1 className="Name">Arnav Deshmukh</h1>
      <h2>React Developer</h2>
      <button>
        <i class="fa-solid fa-envelope"></i>
        <a className="email-button"href="https://www.google.com">Email</a>
      </button>

<div className="content">
<div className="first-Content">
    
    <p>I am a frontend developer with a particular interest in making Website and Android Apps using Flutter and React.I try to keep up with lateset tools and always looking for new things</p>
</div>
<div className="second-Content"></div>
<h1 className="interest-section">Interests</h1>
<p>Cricket Expert.Music Scholar.Reader.Travel Geek.</p>
</div>
    </div>
  );
}

export default MainContent;
