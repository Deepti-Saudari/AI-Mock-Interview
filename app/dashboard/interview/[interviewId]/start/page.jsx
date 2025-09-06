"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useState, useEffect } from "react";
import QuestionSection from "./_components/QuestionSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import Link from "next/link";

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    console.log(jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };

  return (
    <div className="relative">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 my-10">
        {/* Question Section */}
        <QuestionSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          setActiveQuestionIndex={setActiveQuestionIndex}
        />

        {/* Video/audio Recording */}
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>

      {/* Navigation Buttons BELOW the container */}
      <div className="flex justify-start ml-6 mb-6 items-center gap-4 mt-6">
        {/* Previous Question Button */}
        {activeQuestionIndex > 0 && (
          <button
            onClick={() =>
              setActiveQuestionIndex((prevIndex) => prevIndex - 1)
            }
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Previous Question
          </button>
        )}

        {/* Next Question Button */}
        {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
          <button
            onClick={() =>
              setActiveQuestionIndex((prevIndex) => prevIndex + 1)
            }
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Next Question
          </button>
        )}
      </div>

      {/* End Interview Button */}
      <div className="flex justify-start ml-6 mb-8 items-center gap-4 mt-6">
        {activeQuestionIndex == mockInterviewQuestion?.length - 1 && (
          <Link
            href={"/dashboard/interview/" + interviewData?.mockId + "/feedback"}
          >
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              End Interview
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default StartInterview;