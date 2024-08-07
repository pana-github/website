import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row items-center">
        <div className="font-extrabold text-9xl">4</div>
        <div className="relative mx-6 w-32 h-32">
          <div className="absolute bottom-0 left-0 w-32 h-28 rounded-full bg-primary-900"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 overflow-hidden w-32 h-32 rounded-b-full">
            <div className="body-grow absolute bottom-[-0.3rem] left-1/2 transform -translate-x-1/2 w-24 h-32 border-4 border-primary-900 bg-white rounded-lg">
              <div className="relative mt-6">
                <div className="absolute top-0 left-6 w-12 h-4">
                  <div className="absolute bottom-0 w-2.5 h-2.5 rounded-full bg-primary-900 animate-eye"></div>
                  <div className="absolute bottom-0 left-6 w-2.5 h-2.5 rounded-full bg-primary-900 animate-eye"></div>
                </div>
                <div className="absolute top-4 left-4 w-4 h-1 bg-secondary rounded-full"></div>
                <div className="absolute top-4 right-4 w-4 h-1 bg-secondary rounded-full"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-primary-900 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-extrabold text-9xl">4</div>
      </div>

      <div className="mt-12 text-primary-900 text-xl font-light">
        Oops. ページが見つかりませんでした.
      </div>
      <Link
        className="mt-10 px-6 py-3 bg-secondary text-white rounded hover:bg-secondary-600"
        to={"/"}
      >
        Back Home
      </Link>
    </div>
  );
};

export default Error404;
