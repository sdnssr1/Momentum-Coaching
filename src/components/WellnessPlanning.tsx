import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  FileText,
  Leaf,
  RefreshCw,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Header from "./Header";

const WellnessPlanning = () => {
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
          Create Balance That Lasts
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Our holistic wellness plans integrate nutrition, movement, rest, and
          mindfulness—tailored to support your life, not control it.
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
            Start Your Wellness Plan
          </Button>
        </motion.div>
      </section>

      <Separator className="max-w-5xl mx-auto opacity-30" />

      {/* Features Section */}
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
              <FileText className="h-6 w-6 text-[#4B0082]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2">
                Personal Wellness Assessment
              </h3>
              <p className="text-gray-700">
                Comprehensive evaluation of your current stress levels, energy
                patterns, and emotional wellbeing to create a truly personalized
                approach.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
            variants={fadeIn}
          >
            <div className="bg-[#4B0082]/10 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-[#4B0082]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2">
                Weekly Plan & Goals
              </h3>
              <p className="text-gray-700">
                Structured yet flexible guidance for nutrition, movement, and
                rest that fits your real life and supports your unique body's
                needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
            variants={fadeIn}
          >
            <div className="bg-[#4B0082]/10 p-3 rounded-full">
              <Leaf className="h-6 w-6 text-[#4B0082]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2">
                Mindfulness Practices
              </h3>
              <p className="text-gray-700">
                Simple, practical grounding exercises and mindfulness prompts
                that help you stay present and connected throughout your day.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
            variants={fadeIn}
          >
            <div className="bg-[#4B0082]/10 p-3 rounded-full">
              <RefreshCw className="h-6 w-6 text-[#4B0082]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2">
                Bi-Weekly Reflections
              </h3>
              <p className="text-gray-700">
                Regular check-ins to assess what's working, what needs
                adjustment, and how to realign your practices with your evolving
                needs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Who This Is For Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#4B0082] mb-8 text-center">
            Perfect for You If...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                alt="Serene journal and workspace with natural elements"
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
                      You feel overwhelmed or ungrounded in your daily life
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You want sustainable, lifestyle-based wellness—not
                      perfection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You need small, structured practices that support
                      long-term clarity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You're seeking balance between ambition and self-care
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
                      You're looking for a rigid diet plan or quick fix
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">
                      You prefer a completely self-guided approach without
                      structure
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">
                      You're not ready to reflect on patterns and make gradual
                      changes
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
          Your Wellness Journey
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
                  Wellness Discovery Session
                </h3>
                <p className="text-gray-700">
                  A thoughtful conversation about your current wellness
                  practices, challenges, and what balance means specifically for
                  you and your lifestyle.
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
                  Personalized Plan Delivery
                </h3>
                <p className="text-gray-700">
                  Receive your custom wellness blueprint with practical
                  strategies for nutrition, movement, rest, and mindfulness that
                  align with your natural rhythms.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-[#4B0082] mb-2">
                  Weekly Check-In (Optional)
                </h3>
                <p className="text-gray-700">
                  Brief touchpoints to celebrate wins, address challenges, and
                  make small adjustments to keep your wellness practices
                  sustainable and effective.
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
                  Realignment Every 2-4 Weeks
                </h3>
                <p className="text-gray-700">
                  Deeper reflection sessions to assess your progress, evolve
                  your practices, and ensure your wellness plan continues to
                  serve your changing needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="booking" className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#4B0082] mb-4">
            Let's build your wellness rhythm together.
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Begin your journey toward sustainable balance with a personalized
            approach that honors both your ambitions and your need for
            nourishment.
          </p>

          <div className="bg-[#FFF8E1] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#4B0082] mb-6">
              Book Your Wellness Session
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
                  What aspects of wellness are you most interested in?
                </label>
                <textarea
                  id="goals"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B0082]/50 min-h-[100px]"
                  placeholder="Briefly describe your wellness goals and any specific areas you'd like to focus on"
                  required
                />
              </div>

              <Button className="w-full bg-[#4B0082] hover:bg-[#3a006b] text-white py-6 text-lg font-semibold">
                Book Your Wellness Session
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessPlanning;
