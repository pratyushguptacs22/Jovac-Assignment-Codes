import React from 'react';
import ReactDOM from 'react-dom';

function CoursePage() {
  return (
    <div>
      <h1>ASP Micriservices with .NET Core for Developers</h1>
      <ul>
        <li><a href="#">Introduction</a></li>
        <li><a href="#">1. Introduction to Microservices</a></li>
        <li><a href="#">2. Hands on: Creating Microservices with ASP.net Core</a></li>
        <li><a href="#">3. Hands on: Synchronous Communication between Microservices</a></li>
        <li><a href="#">4. Microservices and DevOps</a></li>
        <li><a href="#">5. Microservices Containerisation with Docker</a></li>
        <li><a href="#">6. Microservices Deployment</a></li>
        <li><a href="#">Conclusion</a></li>
      </ul>
      <h2>Communication between microservices</h2>
      <ul>
        <li><a href="#">Overview</a></li>
        <li><a href="#">QnA</a></li>
        <li><a href="#">Notebook</a></li>
      </ul>
      <h2>INSTRUCTOR</h2>
      <p>Rodrigo Diaz - Solution Architect, LOrem, Ipsum, enginer Analyst, Programmer, worker</p>
      <h2>RELATED TO COURSE</h2>
      <ul>
        <li><a href="#">Classroom</a></li>
        <li><a href="#">Class Files</a></li>
        <li><a href="#">Certificates</a></li>
      </ul>
      <button>Leave a review</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <CoursePage />
  </React.StrictMode>,
  document.getElementById('root')
);