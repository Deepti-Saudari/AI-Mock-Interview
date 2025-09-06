"use client";

import React from "react";
import RotatingText from "./RotatingText";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Intro Section */}
      <section className="w-full flex items-center justify-center py-24">
        <RotatingText />
      </section>

      {/* Dashboard Content */}
      <div className="flex flex-col items-center w-full p-[50px] px-4 -mt-16">
        {/* Add New Interview Section */}
        <div className="rounded-lg shadow-xl p-[50px] my-4 bg-gradient-to-br from-gray-100 via-white to-gray-100 backdrop-blur-md w-full max-w-5xl">
          <h2 className="text-3xl font-bold bg-gradient-to-br from-blue-900 to-blue-600 text-transparent bg-clip-text mb-4 mt-0">
            Add New Interview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 ml-0">
            <AddNewInterview />
          </div>
        </div>

        {/* Your Achievements Section */}
        <div className="rounded-lg shadow-xl p-[50px] my-8 bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-md w-full max-w-5xl">
          <h2 className="text-3xl font-bold bg-gradient-to-br from-yellow-700 via-yellow-500 to-yellow-600 text-transparent bg-clip-text mb-4">
            Your Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Achievement 1 */}
            <div className="p-4 border rounded-lg shadow-sm bg-gradient-to-br from-green-50 to-white">
              <h3 className="font-bold text-lg text-green-700">Interview Master</h3>
              <p className="text-sm text-gray-600 mt-2">You've completed 5 interviews successfully with an average rating of 8.5/10. Keep up the great work!</p>
            </div>

            {/* Achievement 2 */}
            <div className="p-4 border rounded-lg shadow-sm bg-gradient-to-br from-yellow-50 to-white">
              <h3 className="font-bold text-lg text-yellow-700">Top Performer</h3>
              <p className="text-sm text-gray-600 mt-2">Your mock scenario for "Product Manager" received excellent feedback with a 9/10 rating. You're on the right track!</p>
            </div>

            {/* Achievement 3 */}
            <div className="p-4 border rounded-lg shadow-sm bg-gradient-to-br from-blue-50 to-white">
              <h3 className="font-bold text-lg text-blue-700">Goal Setter</h3>
              <p className="text-sm text-gray-600 mt-2">You've set and completed your first milestone: mastering behavioral interviews. Amazing progress!</p>
            </div>
          </div>
        </div>

        {/* Interview List Section */}
        <div className="rounded-lg shadow-xl p-[60px] my-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 backdrop-blur-md w-full max-w-5xl">
          <h2 className="text-3xl font-bold bg-gradient-to-br from-blue-900 to-blue-600 text-transparent bg-clip-text mb-4">
            Start Your Scheduled Interview
          </h2>
          <InterviewList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;