import React from "react";

export default function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        Welcome to my Auth App
      </h1>
      <p className="text-slate-700 mb-4">
        This is a full-stack web application built with <strong>MERN</strong>{" "}
        (MongoDB, Express, React, Node.js) stack. It includes authentication
        features that allow users to sign up, login, and logout and provieds
        access to protected routes only for authenticated users.
      </p>
      <p className="text-slate-700 mb-4">
        The frontend of the application is built with React and uses React
        Router for client-side routing The back-end is built with Node.js and
        Express and uses MongoDB as the database. Authentication is implemented
        using JSON Web Token (JWT).
      </p>
      <p className="text-slate-700 mb-4">
        This application is intended as a starting point for building full-stack
        web application with authentication using the MERN stack.
      </p>
    </div>
  );
}
