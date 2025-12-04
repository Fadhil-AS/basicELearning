import React from "react";

export default function Navbar(){
    return(
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-700 px-4 py-4">
              <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
                <div className="size-6 text-primary">
                  <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="none"></path>
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 10.5l-2.5-3.01L11 12.51 8.5 9.5 5 14h14l-4.5-3.5z"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold">E-Learn</h2>
              </div>
              <div className="hidden md:flex items-center gap-9">
                <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Courses</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Categories</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">About Us</a>
              </div>
              <div className="flex gap-2">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-gray-300 dark:border-gray-600 text-text-light dark:text-text-dark text-sm font-bold hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span className="truncate">Login</span>
                </button>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90">
                  <span className="truncate">Sign Up</span>
                </button>
              </div>
            </nav>
          </div>
        </header>
    );
}