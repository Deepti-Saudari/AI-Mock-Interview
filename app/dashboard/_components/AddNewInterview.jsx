"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

const AddNewInterview = () => {
  const [openDailog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();
  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const InputPrompt = `
You are a senior software engineer. Based on the following job details:
- Job Position: ${jobPosition}
- Tech Stack: ${jobDesc}
- Experience: ${jobExperience} years

Generate exactly 5 realistic interview questions **with answers** in this strict JSON format:
[
  {
    "Question": "What is ...?",
    "Answer": "..."
  },
  ...
]
Keep answers short, clear, and voice-friendly (max 4–6 sentences).
`;

    try {
      const result = await chatSession.sendMessage(InputPrompt);
      const rawText = result.response.text().replace("```json", "").replace("```", "").trim();

      let parsedJson;
      try {
        parsedJson = JSON.parse(rawText);
      } catch (err) {
        console.error("Invalid JSON from Gemini:", rawText);
        alert("Failed to generate valid questions. Try again.");
        setLoading(false);
        return;
      }

      const MockJsonResp = JSON.stringify(parsedJson);
      setJsonResponse(MockJsonResp);

      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition,
          jobDesc,
          jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("YYYY-MM-DD"),
        })
        .returning({ mockId: MockInterview.mockId });

      if (resp) {
        setOpenDialog(false);
        router.push("/dashboard/interview/" + resp[0]?.mockId);
      }
    } catch (err) {
      console.error("Error generating questions:", err);
      alert("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-10 rounded-lg border bg-secondary hover:scale-105 hover:shadow-sm transition-all cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className=" text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDailog} onOpenChange={(open) => setOpenDialog(open)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl bg-gradient-to-r from-blue-800 to-blue-700 text-transparent bg-clip-text">
              Tell us more about your job
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div className="my-3 mb-3">
                  <h2>
                    Add Details about your job position, job description, and
                    years of experience
                  </h2>

                  <div className="my-5 space-y-3">
                    <label className="text-black">Job Role/job Position</label>
                    <Input
                      className="mt-1"
                      placeholder="Ex. Full stack Developer"
                      required
                      onChange={(e) => setJobPosition(e.target.value)}
                    />
                  </div>
                  <div className="my-5 space-y-3">
                    <label className="text-black">
                      Job Description/ Tech stack (In Short)
                    </label>
                    <Textarea
                      className="placeholder-opacity-50"
                      placeholder="Ex. React, Angular, Nodejs, MySQL, NoSQL, Python"
                      required
                      onChange={(e) => setJobDesc(e.target.value)}
                    />
                  </div>
                  <div className="my-5 space-y-3">
                    <label className="text-black">Years of Experience</label>
                    <Input
                      className="mt-1"
                      placeholder="Ex. 5"
                      max="50"
                      type="number"
                      required
                      onChange={(e) => setJobExperience(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="goast"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-blue-700 to-blue-800 text-white hover:from-blue-600 hover:to-blue-800 transition-all"
                  >
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin mr-2" />
                        Generating From AI
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>

          <DialogClose
            className="absolute top-4 right-4 text-xl text-gray-600 cursor-pointer"
            onClick={() => setOpenDialog(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
