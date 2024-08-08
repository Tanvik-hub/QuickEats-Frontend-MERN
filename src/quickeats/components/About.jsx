import React from 'react';

const About = () => {
  return (
    <div className="aboutPage">
      <h1>About QuickEats</h1>
     
      <h2>Project Overview</h2>
      <p>
        QuickEats is a web application designed to showcase my proficiency in the MERN stack, with a particular emphasis on backend development. This project is an embodiment of my backend skills, focusing on creating a robust and scalable system using MongoDB, Express, React, and Node.js.
      </p>
      
      <h2>Backend Focus</h2>
      <p>At the heart of QuickEats is a powerful backend built with Node.js and Express, which manages all core functionalities of the application. This includes:</p>
      <ul>
        <li><strong>Vendor Management:</strong> Vendors can register, log in, and manage their hotels, including adding and updating their details.</li>
        <li><strong>Data Management:</strong> The application uses MongoDB for efficient data storage and retrieval, ensuring smooth and reliable data handling.</li>
        <li><strong>API Endpoints:</strong> A range of RESTful API endpoints handle various operations, from user authentication to data fetching, providing a seamless experience.</li>
      </ul>
      
      <h2>Frontend Overview</h2>
      <p>While the primary focus of QuickEats is on the backend, the frontend, developed using React, provides a user-friendly interface for vendors. Key features include:</p>
      <ul>
        <li><strong>Vendor Dashboard:</strong> An interface where vendors can view and manage their hotel listings.</li>
        <li><strong>Search and Filters:</strong> Basic functionalities to search for and filter hotel listings.</li>
      </ul>
      
      <h2>Purpose and Vision</h2>
      <p>The main objective of this project is to demonstrate the capabilities of a well-architected backend system. While the frontend is designed to provide basic interactions for vendors, it is the backend that truly shines, showcasing how a strong server-side architecture can support various functionalities and ensure smooth operations.</p>
      <p>QuickEats is more than just a tool for vendors—it's a testament to the power of the MERN stack and the importance of a solid backend. This project is built from the perspective of backend development, focusing on creating a reliable and efficient system that handles the complexities of data management and vendor operations.</p>
      <p>Explore the features and experience the backend prowess of QuickEats!</p>
    </div>
  );
};

export default About;
