"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Webcam from "react-webcam";
import Link from "next/link";
import { useContext } from "react";
import { WebCamContext } from "../../layout";

const Interview = ({ params }) => {
  const { webCamEnabled, setWebCamEnabled } = useContext(WebCamContext);
  const [interviewData, setInterviewData] = useState();
  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewData(result[0]);
  };

  return (
    <>
      <h2 className="font-bold text-3xl bg-gradient-to-r from-blue-900 to-blue-800 text-transparent bg-clip-text text-center mb-10 mt-8">
        Let's Get Started
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Job Details Section */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col p-8 rounded-lg border gap-3 bg-white shadow-md w-[110%] ml-5">
            <h2 className="text-lg">
              <strong>Job Role/Job Position: </strong>
              {interviewData?.jobPosition}
            </h2>
            <h2 className="text-lg">
              <strong>Job Description/Job Stack: </strong>
              {interviewData?.jobDesc}
            </h2>
            <h2 className="text-lg">
              <strong>Years of Experience: </strong>
              {interviewData?.jobExperience}
            </h2>
          </div>
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-50 shadow-md w-[110%] ml-5">
            <h2 className="flex gap-2 items-center text-yellow-700 mb-2">
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-2 text-yellow-500 text-sm">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>

        {/* Webcam Section */}
        <div className="flex flex-col items-center gap-4 ml-10 rounded-lg ">
          {webCamEnabled ? (
            <div className="flex items-center rounded-lg justify-center">
              <Webcam
                onUserMedia={() => setWebCamEnabled(true)}
                onUserMediaError={() => setWebCamEnabled(false)}
                height={400}
                width={400}
                mirrored={true}
              />
            </div>
          ) : (
            <WebcamIcon className="h-80 w-80 p-10 mr-10 bg-gray-100 rounded-lg border" />
          )}
          <Button
            className="w-55 bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 transition-all rounded-full"
            onClick={() => setWebCamEnabled((prev) => !prev)}
          >
            {webCamEnabled ? "Close WebCam" : "Enable WebCam"}
          </Button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-center my-6 md:justify-center">
        <Link href={"/dashboard/interview/" + params.interviewId + "/start"}>
          <Button className="px-5 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 transition-all rounded-full">
            Start Interview
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Interview;