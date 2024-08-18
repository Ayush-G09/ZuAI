import React from "react";
import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-700">
        The page you are looking for does not exist.
      </p>
      <Link href="/" passHref>
        <div className="mt-6 text-blue-500 underline">Go back to Home</div>
      </Link>
    </div>
  );
};

export default Custom404;
