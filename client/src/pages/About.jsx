import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">About Us</h1>
      <p className="text-slate-700 mb-6">
        Welcome to our MERN stack web application—a powerful yet simple solution
        for user management and authentication, built to help developers and
        businesses kickstart their projects with a secure, full-stack
        foundation.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-slate-800">
        What We Offer
      </h2>
      <p className="text-slate-700 mb-6">
        Our application provides a seamless experience for users to sign up, log
        in, and access exclusive content in a secure environment. By leveraging
        industry-standard technologies and best practices, this platform ensures
        that user data remains protected while offering a straightforward user
        interface and responsive design.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-slate-800">
        Key Features
      </h2>
      <ul className="text-slate-700 mb-6 list-disc list-inside">
        <li>
          <strong>User Authentication:</strong> Secure login, signup, and logout
          functionality with password hashing and JSON Web Token (JWT) for
          session management.
        </li>
        <li>
          <strong>Protected Routes:</strong> Certain parts of the application
          are accessible only to authenticated users, ensuring data protection
          and secure access control.
        </li>
        <li>
          <strong>Scalability:</strong> Built on MongoDB, Express, React, and
          Node.js, this application is designed to handle growth and additional
          features as your needs expand.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-slate-800">
        Technology Stack
      </h2>
      <ul className="text-slate-700 mb-6 list-disc list-inside">
        <li>
          <strong>MongoDB:</strong> Our database solution, offering a scalable,
          NoSQL environment to store and manage user data securely.
        </li>
        <li>
          <strong>Express:</strong> A robust backend framework that powers our
          API and handles authentication requests efficiently.
        </li>
        <li>
          <strong>React:</strong> Our dynamic front-end library that provides a
          smooth and intuitive user experience.
        </li>
        <li>
          <strong>Node.js:</strong> The runtime environment for our server-side
          code, enabling high-performance and scalability.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-slate-800">Our Vision</h2>
      <p className="text-slate-700 mb-6">
        We aim to create a platform that simplifies the development process for
        other applications requiring secure user authentication and a solid data
        management foundation. This application serves as a starting point for
        developers looking to build secure, feature-rich, full-stack
        applications.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-slate-800">
        Get Started
      </h2>
      <p className="text-slate-700 mb-4">
        Feel free to explore and experience the features of this application. If
        you’re a developer, consider using this as a baseline for your next
        project, or customize it to fit your unique needs. Thank you for
        visiting, and we hope you enjoy your experience!
      </p>
    </div>
  );
}
