import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  MessageCircle,
  ClipboardCheck,
  RefreshCw,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Header from "./Header";

const AccountabilityCheckins = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const handleBookSession = () => {
    // Scroll to booking form at the bottom of the page
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E1]">
      <Header />

      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#4B0082] mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Stay Supported.
          <br />
          Stay Accountable.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          With regular check-ins, you don't just stay on track—you move forward
          with clarity, care, and celebration.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={handleBookSession}
            className="bg-[#4B0082] hover:bg-[#3a006b] text-white px-8 py-6 text-lg rounded-md flex items-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Schedule a Check-In
          </Button>
        </motion.div>
      </section>

      <Separator className="max-w-5xl mx-auto opacity-30" />

      {/* What's Included Section */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#4B0082] mb-8 text-center">
          What's Included
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
            variants={fadeIn}
          >
            <div className="bg-[#4B0082]/10 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-[#4B0082]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2">
                Weekly or Bi-Weekly Check-In Calls
              </h3>
              <p className="text-gray-700">
                Regular, focused conversations to review your progress,
                celebrate wins, and navigate challenges with personalized
                guidance.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
            variants={fadeIn}
          >
            <div className="bg-[#4B0082]/10 p-3 rounded-full">
              <ClipboardCheck className="h-6 w-6 text-[#4B0082]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2">
                Reflection Prompts & Progress Journaling
              </h3>
              <p className="text-gray-700">
                Thoughtful questions and simple tracking tools to help you
                recognize patterns, celebrate progress, and build
                self-awareness.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
            variants={fadeIn}
          >
            <div className="bg-[#4B0082]/10 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-[#4B0082]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2">
                Review of Wins, Blocks, and Next Steps
              </h3>
              <p className="text-gray-700">
                Structured conversations that acknowledge achievements, address
                obstacles, and create clear action plans for continued momentum.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
            variants={fadeIn}
          >
            <div className="bg-[#4B0082]/10 p-3 rounded-full">
              <MessageCircle className="h-6 w-6 text-[#4B0082]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2">
                Message Support Between Sessions
              </h3>
              <p className="text-gray-700">
                Direct access to your coach for quick questions, celebrations,
                or support when challenges arise between scheduled check-ins.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Who This Is For Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#4B0082] mb-8 text-center">
            Is This Right For You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                alt="Woman reviewing progress with coach during accountability session"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#4B0082] mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  This is for you if:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You tend to lose momentum after starting strong
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You want consistent support without constant pressure
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You value progress tracking and emotional accountability
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You're seeking a balance between structure and flexibility
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#4B0082] mb-4 flex items-center gap-2">
                  <X className="h-6 w-6 text-red-500" />
                  This is not for you if:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">
                      You prefer a completely self-directed approach
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">
                      You're looking for a quick fix rather than sustainable
                      change
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">
                      You're not ready to reflect honestly on your patterns and
                      progress
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#4B0082] mb-8 text-center">
          Your Support Rhythm
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#4B0082]/30 hidden md:block"></div>

          {/* Timeline steps */}
          <div className="space-y-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-[#4B0082] mb-2">
                  Weekly Check-In Session
                </h3>
                <p className="text-gray-700">
                  A focused conversation to review your progress, celebrate
                  wins, address challenges, and set clear intentions for the
                  week ahead.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
                <div className="bg-[#4B0082] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10">
                  1
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex justify-center items-center order-1 mb-4 md:mb-0">
                <div className="bg-[#4B0082] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10">
                  2
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-2">
                <h3 className="text-2xl font-semibold text-[#4B0082] mb-2">
                  Reflection + Adjustments
                </h3>
                <p className="text-gray-700">
                  Guided prompts help you process your experiences, recognize
                  patterns, and make thoughtful adjustments to your approach as
                  needed.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-[#4B0082] mb-2">
                  Midweek Message or Reminder
                </h3>
                <p className="text-gray-700">
                  A brief touchpoint to maintain momentum, provide
                  encouragement, and offer support exactly when you need it
                  most.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
                <div className="bg-[#4B0082] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10">
                  3
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex justify-center items-center order-1 mb-4 md:mb-0">
                <div className="bg-[#4B0082] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10">
                  4
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-2">
                <h3 className="text-2xl font-semibold text-[#4B0082] mb-2">
                  Repeat with Evolution
                </h3>
                <p className="text-gray-700">
                  As you progress, your check-ins evolve to address new
                  challenges and opportunities, ensuring your support grows with
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#4B0082] mb-12">
            Client Experience
          </h2>

          <div className="bg-[#FFF8E1] p-8 md:p-12 rounded-lg shadow-md relative">
            <svg
              className="absolute top-4 left-4 h-12 w-12 text-[#4B0082]/20"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>

            <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
              "The regular check-ins with Hannah have been transformative. It's
              not just about having someone hold me accountable—it's having
              someone who truly sees my progress, helps me navigate setbacks
              with compassion, and celebrates even the smallest wins."
            </p>

            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&q=80"
                alt="Melissa K."
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-semibold text-[#4B0082]">Melissa K.</p>
                <p className="text-sm text-gray-600">Client for 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="booking"
        className="px-4 py-16 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold text-[#4B0082] mb-4">
          Let's build momentum, one check-in at a time.
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Regular support makes all the difference between temporary motivation
          and lasting change. Take the first step toward consistent progress.
        </p>

        <div className="bg-[#FFF8E1] p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#4B0082] mb-6">
            Book Your First Check-In
          </h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B0082]/50"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B0082]/50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred Date & Time
              </label>
              <input
                id="date"
                type="datetime-local"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B0082]/50"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="goals"
                className="block text-sm font-medium text-gray-700"
              >
                What are your main goals for accountability support?
              </label>
              <textarea
                id="goals"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B0082]/50 min-h-[100px]"
                placeholder="Briefly describe what you're working toward and where you'd like support"
                required
              />
            </div>

            <Button className="w-full bg-[#4B0082] hover:bg-[#3a006b] text-white py-6 text-lg font-semibold">
              Book My First Check-In
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AccountabilityCheckins;
