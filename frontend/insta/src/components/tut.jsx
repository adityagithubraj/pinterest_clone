import React from 'react';
import './tut.css';

function tut() {
  return (
    <div className="page">
      <nav className="sidebar">
        {/* Navigation items here */}
        <div className="nav-item active">JS Introduction</div>
        <div className="nav-item">JS Execution</div>
        <div className="nav-item">Node.js Installation</div>
        {/* ... other items */}
      </nav>
      <div className="content">
        <header className="header">
          <button className="previous-btn">« Previous</button>
          <h1>JS Introduction</h1>
          <button className="next-btn">Next »</button>
        </header>
        <main className="main-content">
          {/* Main content text here */}
          <p>Today, I am creating this JavaScript tutorial to provide you with a resource...</p>
          {/* ... rest of the content */}
          {/* Video preview image */}
          <div className="video-preview">
            vide
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bairesdev.com%2Fblog%2Fwhat-is-javascript-used-for%2F&psig=AOvVaw01BS69geiGdH3xn7e8LJOU&ust=1713079919109000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOi94JLWvoUDFQAAAAAdAAAAABAE" alt="PHOTO" />
            {/* ... any other video related content */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default tut;
