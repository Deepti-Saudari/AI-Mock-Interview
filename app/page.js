import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Contect from './_components/Contect';
const Page = () => {
  return (
    <>
      <Head>
        <title>AI Mock Interview</title>
        <meta
          name="description"
          content="Ace your next interview with AI-powered mock interviews"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen font-sans bg-gray-50">
        {/* Header Section */}
        <header className="w-full py-6 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <h1 className="text-3xl font-bold text-white">AI Mock Interview</h1>
            <nav className="flex flex-wrap items-center justify-center mt-4 md:mt-0 gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Deepti-Saudari"
              >
                <FaGithub className="w-8 h-8 text-white hover:text-white transition" />
              </a>
              <Link href="#features" className="text-white hover:text-white transition">
                Features
              </Link>
              <Link href="#testimonials" className="text-white hover:text-white transition">
                Testimonials
              </Link>
              <Link href="#contact" className="text-white hover:text-white transition">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        {/* Body Content Section */}
        <div className="bg-blue-50 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center rounded-xl shadow-lg p-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-800">
                  Ace Your Next Interview
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-700">
                  Practice with AI-powered mock interviews and get personalized feedback
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/dashboard">
                    <Button className="w-full text-lg px-6 py-3 font-semibold bg-blue-700 text-white hover:bg-blue-800 transition rounded-xl">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button
                      variant="outline"
                      className="w-full text-lg px-6 py-3 font-semibold text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white transition rounded-xl"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="/hero-image.png"
                  alt="AI Interview Illustration"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <section id="features" className="py-20 bg-white px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Features</h2>
            <p className="mt-4 text-lg text-gray-700">
              Our AI Mock Interview platform offers a range of powerful features:
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                'AI Mock Interviews',
                'Instant Feedback',
                'Comprehensive Reports',
              ].map((title, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/3 p-6 bg-blue-50 rounded-2xl shadow-xl"
                >
                  <h3 className="text-2xl font-semibold text-blue-700">{title}</h3>
                  <p className="mt-2 text-gray-600">
                    {title === 'AI Mock Interviews' &&
                      'Experience realistic interview scenarios with our advanced AI.'}
                    {title === 'Instant Feedback' &&
                      'Get instant, personalized feedback to improve your performance.'}
                    {title === 'Comprehensive Reports' &&
                      'Receive detailed reports highlighting your strengths and weaknesses.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">What Our Users Say</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                {
                  quote:
                    'The AI mock interviews were incredibly helpful. I felt much more confident going into my real interview.',
                  name: 'Alex Johnson',
                },
                {
                  quote:
                    'The feedback was spot on and helped me improve my answers. Highly recommend this service!',
                  name: 'Sarah Williams',
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/2 p-6 bg-white rounded-2xl shadow-lg"
                >
                  <p className="text-gray-700">"{testimonial.quote}"</p>
                  <h4 className="mt-4 font-semibold text-blue-600">- {testimonial.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white px-6">
          <Contect />
        </section>
      </main>
      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center border-t border-gray-700">
        <p className="text-sm">© 2024 AI Mock Interview. All rights reserved.</p>
      </footer>
    </>
  );
};
export default Page;
