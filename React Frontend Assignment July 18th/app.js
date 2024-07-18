import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="title">Contents</div>
        <ul>
          <li>Introduction</li>
          <li>1. Introduction to Microservices</li>
          <li>2. Hands on: Creating Microservices with ASP.net Core</li>
          <li>3. Hands on: Synchronous Communicatio between Microservices</li>
          <li>4. Microservices and DevOps</li>
          <li>5. Microservices Containerisation with Docker</li>
          <li>6. Microservices Deployment</li>
          <li>Conclusion</li>
        </ul>
      </div>
      <div className="main">
        <div className="header">
          <div className="title">ASP Micriservices with .NET Core for Developers</div>
          <div className="subtitle">Communication between microservices</div>
          <div className="actions">
            <button>Leave a review</button>
            <button>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.66667V14.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.3333 8H1.66667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="content">
          {/* Course content will be here */}
        </div>
        <div className="footer">
          <button className="tab">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 6.5H8V3.5H11.5V6.5ZM6 3.5H8V6.5H6V3.5ZM4 11.5H6.5V8H4V11.5ZM11.5 11.5H8V8H11.5V11.5ZM4 4.5H6.5V1.5H4V4.5ZM11.5 4.5H8V1.5H11.5V4.5ZM6 11.5H8V8H6V11.5ZM6.5 11.5H4V8H6.5V11.5Z" fill="black" />
            </svg>
            <span>Overview</span>
          </button>
          <button className="tab">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.00003 13.5L6.4142 13.0858L6.4142 12.9142L7 12.5L7.5858 12.9142L7.5858 13.0858L7.00003 13.5ZM6.5 5.5H8.5V10.5H6.5V5.5Z" fill="black" />
            </svg>
            <span>QnA</span>
          </button>
          <button className="tab">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8H4V4H12V8ZM8 12H4V8H8V12ZM12 12H8V8H12V12Z" fill="black" />
            </svg>
            <span>Notebook</span>
          </button>
          <button className="tab">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 6.5H11V9.5H5V6.5ZM7.5 11H8.5V14H7.5V11Z" fill="black" />
            </svg>
            <span>Transcript</span>
          </button>
        </div>
      </div>
      <div className="instructor">
        <div className="title">INSTRUCTOR</div>
        <div className="details">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fbusinessman&psig=AOvVaw2I08fQh-O_YzQ9i8f5W3K2&ust=1700141669972000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPC23631u_oCFQAAAAAdAAAAABAJ&opi=89978449&client=internal-sd-google&bih=980&biw=1875&q=businessman&ved=2ahUKEwjV4u2q2L_BAxV_dCsKHT3sB0YQMygAegQIARAB&referrer=https%3A%2F%2Fwww.google.com%2F&usg=AOvVaw2I08fQh-O_YzQ9i8f5W3K2&referrer=https%3A%2F%2Fwww.google.com%2F" alt="Instructor" />
          <div className="name">Rodrigo Diaz</div>
          <div className="role">Solution Architect, LOrem, Ipsum, enginer Analyst, Programmer, worker</div>
        </div>
      </div>
      <div className="related-courses">
        <div className="title">RELATED TO COURSE</div>
        <ul>
          <li>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4.5H4V11.5H8V4.5ZM12 4.5H8V11.5H12V4.5Z" fill="black" />
            </svg>
            <span>Classroom</span>
            <a href="#">show all</a>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 12H2V4H14V12ZM12 14H4V12H12V14Z" fill="black" />
            </svg>
            <span>Class Files</span>
            <a href="#">show all</a>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 9H12V14H4V9ZM10 7H6V4H10V7Z" fill="black" />
            </svg>
            <span>Certificates</span>
            <a href="#">show all</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;