import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section: Login Form */}
      <div className="flex items-center justify-center bg-white">
        <div className="max-w-md w-full px-6 py-10">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter your credentials to access your account.
          </p>

          <div className="mt-6">
            <SignIn />
          </div>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Right Section: Gradient Background and Welcome Message */}
      <div className="flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 text-white">
        <div className="text-center px-6">
          <h2 className="text-4xl font-bold">Your future is just one<br></br> sign-in away</h2>
          <p className="mt-4 text-lg">
            Unlock personalized interview sessions powered by AI.
          </p>
        </div>
      </div>
    </section>
  );
}