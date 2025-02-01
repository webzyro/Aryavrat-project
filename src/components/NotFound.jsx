import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="max-w-full min-h-screen flex flex-col gap-10 items-center justify-center">
      <h3 className="text-7xl font-bold text-slate-700">404!</h3>
      <h1 className="text-8xl font-bold text-slate-700">Page Not Found</h1>
      <Link
        to="/"
        className="text-4xl text-blue-400 border-b-2 hover:text-blue-500"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
