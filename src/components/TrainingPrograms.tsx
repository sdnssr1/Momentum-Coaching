import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  FileText,
  Video,
  RefreshCw,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Header from "./Header";

const TrainingPrograms = () => {
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

  const handleGetPlan = () => {
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
          Custom Training Plans
          <br />
          Designed Around You
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Work out on your terms with expert guidance tailored to your body,
          goals, and lifestyle.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={handleGetPlan}
            className="bg-[#4B0082] hover:bg-[#3a006b] text-white px-8 py-6 text-lg rounded-md flex items-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Get Your Plan
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
                Personalized Workout Plans
              </h3>
              <p className="text-gray-700">
                Custom programming based on your specific goals, available
                equipment, and fitness level—no cookie-cutter routines.
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
                Progress Tracking Tools
              </h3>
              <p className="text-gray-700">
                Simple, effective worksheets and templates to monitor your
                progress, celebrate wins, and identify areas for growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
            variants={fadeIn}
          >
            <div className="bg-[#4B0082]/10 p-3 rounded-full">
              <Video className="h-6 w-6 text-[#4B0082]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4B0082] mb-2">
                Video Demonstrations
              </h3>
              <p className="text-gray-700">
                Access to form tutorials and technique guidance to ensure you're
                performing exercises safely and effectively.
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
                Ongoing Plan Updates
              </h3>
              <p className="text-gray-700">
                Regular revisions to your program as you progress, ensuring your
                training evolves with your changing needs and goals.
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
                src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800&q=80"
                alt="Woman working out with a personalized training plan"
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
                      You want expert programming without the pressure of live
                      sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You prefer flexible scheduling or asynchronous progress
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You're motivated but need structure and guidance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      You want a plan that adapts to your progress over time
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
                      You need real-time accountability during each workout
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">
                      You prefer a completely self-guided approach
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">
                      You're looking for a quick-fix or one-size-fits-all
                      program
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
          How It Works
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
                  Submit Intake Form
                </h3>
                <p className="text-gray-700">
                  Complete a quick questionnaire about your goals, available
                  equipment, schedule, and preferences to help us create your
                  personalized plan.
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
                  Receive Custom Plan
                </h3>
                <p className="text-gray-700">
                  Within 48-72 hours, you'll receive your personalized training
                  program, complete with exercise demonstrations and tracking
                  tools.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-[#4B0082] mb-2">
                  Start Training
                </h3>
                <p className="text-gray-700">
                  Begin your program with confidence, knowing you have a
                  structured plan designed specifically for your needs and
                  goals.
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
                  Adapt and Grow
                </h3>
                <p className="text-gray-700">
                  As you progress, we'll adjust your plan to ensure continued
                  growth and help you overcome any plateaus or challenges.
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
            What Our Clients Say
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
              "Hannah's training program gave me exactly what I needed—structure
              without rigidity. The personalized approach meant I could fit
              workouts around my unpredictable schedule while still seeing
              consistent progress."
            </p>

            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&q=80"
                alt="Sarah J."
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-semibold text-[#4B0082]">Sarah J.</p>
                <p className="text-sm text-gray-600">Client for 8 months</p>
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
          Start Building Your Plan Today
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Take the first step toward a training program that's truly designed
          for you—no cookie-cutter routines, just expert guidance tailored to
          your unique needs.
        </p>

        <div className="bg-[#FFF8E1] p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#4B0082] mb-6">
            Begin Your Intake Process
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
                htmlFor="goals"
                className="block text-sm font-medium text-gray-700"
              >
                What are your main fitness goals?
              </label>
              <textarea
                id="goals"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B0082]/50 min-h-[100px]"
                placeholder="Briefly describe what you hope to achieve with your training program"
                required
              />
            </div>

            <Button className="w-full bg-[#4B0082] hover:bg-[#3a006b] text-white py-6 text-lg font-semibold">
              Begin Intake
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TrainingPrograms;
