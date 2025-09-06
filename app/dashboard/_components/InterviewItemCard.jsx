import React from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const InterviewItemCard = ({ interview }) => {
  const router = useRouter();
  
  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };
  
  const onFeedback = () => {
    router.push("/dashboard/interview/" + interview?.mockId + "/feedback");
  };

  return (
    <div className="border border-gray-500 shadow-sm rounded-lg p-3">
      {/* Increased Font Size */}
      <h2 className="font-bold text-lg text-primary mb-2">{interview?.jobPosition}</h2>
      <h2 className="text-s text-gray-600 mb-2">{interview?.jobExperience} Years of experience</h2>
      <h2 className="text-xs text-gray-400 mb-2">Created At: {interview.createdAt}</h2>

      <div className="flex justify-between mt-4 gap-8 mb-1 ">
        {/* Feedback Button */}
        <Button 
          onClick={onFeedback} 
          size="sm" 
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:bg-blue-800"
        >
          Feedback
        </Button>
        
        {/* Start Button */}
        <Button 
          onClick={onStart} 
          size="sm" 
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:bg-blue-900"
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;