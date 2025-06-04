import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, MessageCircle, X } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Header from "./Header";

const OneToOneCoaching = () => {
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
          One-to-One Coaching for
          <br />
          Real, Lasting Change
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Personalized sessions tailored to your lifestyle, your pace, and your
          power.
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
            Book Your First Session
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
              <MessageCircle className="h-6 w-6 text-[#4B0082]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2">
                Weekly 1-on-1 Video Sessions
              </h3>
              <p className="text-gray-700">
                Dedicated time to discuss your progress, address challenges, and
                refine your approach with personalized guidance.
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
                Habit Tracking & Wellness Planning
              </h3>
              <p className="text-gray-700">
                Simple, effective tools to monitor your daily habits and create
                a sustainable wellness routine that fits your life.
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
                Customized Routines
              </h3>
              <p className="text-gray-700">
                Movement and mindfulness practices designed specifically for
                your body, goals, and available time and resources.
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
                Direct Message Support
              </h3>
              <p className="text-gray-700">
                Access to your coach between sessions for questions, quick
                check-ins, and encouragement when you need it most.
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
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                alt="Woman feeling empowered after coaching session"
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
                      You're seeking consistent support and accountability
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You want clarity on what works for your unique body
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You're ready to build sustainable habits, not quick fixes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You value personalized guidance over generic programs
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
                      You're looking for a one-size-fits-all program
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">
                      You want a quick fix or crash diet approach
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">
                      You prefer minimal guidance and completely self-directed
                      work
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
          Your Coaching Journey
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
                  Discovery Call
                </h3>
                <p className="text-gray-700">
                  We'll start with a free 30-minute conversation to understand
                  your goals, challenges, and what you're looking for in a
                  coach.
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
                  Personalized Plan
                </h3>
                <p className="text-gray-700">
                  Based on our conversation, I'll create a tailored approach
                  that addresses your specific needs, preferences, and
                  lifestyle.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-[#4B0082] mb-2">
                  Weekly Coaching
                </h3>
                <p className="text-gray-700">
                  Regular sessions to provide guidance, adjust your plan as
                  needed, and ensure you're making progress toward your goals.
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
                  Consistent Momentum
                </h3>
                <p className="text-gray-700">
                  As you build sustainable habits, you'll experience growing
                  confidence and clarity that extends beyond our coaching
                  relationship.
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
            Start Your Journey Today
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Take the first step toward sustainable change with a free
            consultation. No pressure, just a conversation about what's
            possible.
          </p>

          <div className="bg-[#FFF8E1] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#4B0082] mb-6">
              Schedule Your Free Consultation
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
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  What are your main goals? (Optional)
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B0082]/50 min-h-[100px]"
                  placeholder="Briefly describe what you hope to achieve"
                />
              </div>

              <Button className="w-full bg-[#4B0082] hover:bg-[#3a006b] text-white py-6 text-lg font-semibold">
                Schedule Free Consult
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneToOneCoaching;
