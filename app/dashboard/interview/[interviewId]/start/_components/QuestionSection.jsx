import { Lightbulb, Volume2, VolumeX } from "lucide-react";
import React from "react";

const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US"; // Optional: Set language for speech
      speech.rate = 1; // Optional: Set speech rate
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text-to-speech."); // Fallback
    }
  };

  const stopSpeech = () => {
    if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    mockInterviewQuestion && (
      <div className="relative flex flex-col gap-8 p-6 ml-5 w-[45rem] h-[30rem] border rounded-lg bg-gray-50 shadow-md">
        {/* Question Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockInterviewQuestion.map((question, index) => (
            <h2
              key={index}
              className={`py-2 px-4 rounded-lg text-center text-sm md:text-base cursor-pointer transition-transform transform ${
                activeQuestionIndex === index
                  ? "bg-blue-600 text-white scale-105 shadow-md" // Active question styling
                  : "bg-gray-200 text-gray-800 hover:bg-blue-100" // Inactive question styling
              }`}
            >
              Question #{index + 1}
            </h2>
          ))}
        </div>

        {/* Active Question Display */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg md:text-xl text-gray-800">
            {mockInterviewQuestion[activeQuestionIndex]?.Question}
          </h2>
          <div className="flex gap-4">
            {/* Start Reading Button */}
            <button
              onClick={() =>
                textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
              }
              className="flex items-center gap-2 px-2 py-1 text-blue-600 rounded-lg hover:bg-gray-100 transition"
            >
              <Volume2 className="w-5 h-5" />
            </button>

            {/* Stop Reading Button */}
            <button
              onClick={stopSpeech}
              className="flex items-center gap-2 px-2 py-1 text-blue-600 rounded-lg hover:bg-gray-100 transition"
            >
              <VolumeX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Note Section */}
        <div className="border rounded-lg p-5 bg-blue-50 shadow-sm">
          <h2 className="flex gap-2 items-center text-blue-800 text-lg md:text-xl">
            <Lightbulb />
            Note:
          </h2>
          <p className="text-sm text-blue-600 mt-2 ">
            {process.env.NEXT_PUBLIC_QUESTION_NOTE || "No note available."}
          </p>
        </div>
      </div>
    )
  );
};

export default QuestionSection;