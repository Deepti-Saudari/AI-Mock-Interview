import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_0.7fr]">
      {/* Left Section: Sign-Up Form */}
      <div className="flex items-center justify-center bg-white">
        <div className="max-w-md w-full px-6 py-10">
          <h1 className="text-2xl font-bold text-gray-900">Join us</h1>
          <p className="mt-2 text-sm text-gray-600">
            Create your account to unlock personalized AI-powered interview preparation.
          </p>

          <div className="mt-6">
            <SignUp />
          </div>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Right Section: Gradient Background */}
      <div className="flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 text-white relative">
        {/* Adjust Placement with Margins */}
        <div className="text-center px-6 absolute top-1/3 transform -translate-y-2">
          <h2 className="text-4xl font-bold">Let’s get you interview-ready</h2>
          <p className="mt-4 text-lg">
            Join us today to access cutting-edge AI-powered interview sessions.
          </p>
        </div>
      </div>
    </section>
  );
}