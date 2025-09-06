"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const Feedback = ({ params }) => {
  const router = useRouter();
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };

  const overallRating = useMemo(() => {
    if (feedbackList && feedbackList.length > 0) {
      const totalRating = feedbackList.reduce(
        (sum, item) => sum + Number(item.rating),
        0
      );
      return (totalRating / feedbackList.length).toFixed(1);
    }
    return 0;
  }, [feedbackList]);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      {feedbackList?.length === 0 ? (
        <div className="text-center">
          <h2 className="font-bold text-xl text-gray-500 my-5">
            No Interview Feedback Record Found
          </h2>
          <Button
            onClick={() => router.replace("/dashboard")}
            className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition"
          >
            Go Home
          </Button>
        </div>
      ) : (
        <>
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-900 via-green-400 to-green-600 bg-clip-text text-transparent mb-5">
              Congratulations!
            </h2>
            <h2 className="text-2xl font-bold text-gray-800">
              Here's your interview feedback:
            </h2>
            <h2 className="text-lg my-3 text-gray-600">
              Your overall interview rating{" "}
              <strong
                className={`text-2xl ${
                  overallRating >= 5 ? "text-green-500" : "text-red-600"
                }`}
              >
                {overallRating}
                <span className="text-gray-800">/10</span>
              </strong>
            </h2>
            <h2 className="text-sm text-gray-500">
              Below, you'll find the interview questions, correct answers, your
              answers, and feedback for improvement:
            </h2>
          </div>

          {/* Feedback List */}
          <div className="space-y-6">
            {feedbackList &&
              feedbackList.map((item, index) => (
                <Collapsible
                  key={index}
                  className="rounded-lg border bg-gradient-to-r from-gray-100 via-gray-100 to-blue-100 shadow-md hover:shadow-xl transition duration-300"
                >
                  <CollapsibleTrigger className="p-4 rounded-lg my-2 text-left flex justify-between items-center text-gray-800 font-medium">
                    {item.question}
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4">
                    <div className="flex flex-col gap-4">
                      <h2 className="text-red-500 border rounded-lg p-3 bg-red-50 shadow-sm">
                        <strong>Rating:</strong> {item.rating}
                      </h2>
                      <h2 className="p-3 border rounded-lg bg-red-50 text-sm text-red-900 shadow-sm">
                        <strong>Your Answer:</strong>{" "}
                        {item.userAns ? item.userAns : "Not Attempted"}
                      </h2>
                      <h2 className="p-3 border rounded-lg bg-green-50 text-sm text-green-900 shadow-sm">
                        <strong>Correct Answer:</strong> {item.correctAns}
                      </h2>
                      <h2 className="p-3 border rounded-lg bg-blue-50 text-sm text-blue-900 shadow-sm">
                        <strong>Feedback:</strong> {item.feedback}
                      </h2>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
          </div>

          {/* Go Home Button */}
          <div className="text-center mt-10">
            <Button
              onClick={() => router.replace("/dashboard")}
              className="px-5 py-3 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition text-lg font-semibold"
            >
              Go Home
            </Button>
          </div>
        </>
      )}
    </div>
  );};

export default Feedback;