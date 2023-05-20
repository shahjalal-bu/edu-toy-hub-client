import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Perform subscription logic here
    console.log(`Subscribed with email: ${email}`);
    // Clear the input field
    setEmail("");
  };

  return (
    <div className="py-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="max-w-md w-full">
            <h2 className="text-center text-2xl font-bold mb-4">
              Subscribe and be a part of EduToyHub!
            </h2>
            <form onSubmit={handleSubscribe}>
              <div className="flex items-center">
                <input
                  type="email"
                  className="flex-1 appearance-none rounded-l-md bg-white text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-slate-800 hover:bg-slate-900 text-white py-2 px-4 rounded-r-md focus:outline-none focus:shadow-outline"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
