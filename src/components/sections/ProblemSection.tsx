import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";

export default function ProblemSection() {
  return (
    <motion.section
      className="py-20 w-full bg-gradient-to-b from-[#FFF9E9] to-[#FFF5E0] relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-50/30 rounded-full blur-3xl"></div>
      <div className="max-w-[1280px] mx-auto px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-6">
              Tired of Fitness Programs That Don't Understand You?
            </h2>
            <p className="text-xl text-gray-700">
              Most fitness programs are designed for people who already feel
              comfortable in their bodies and know their way around a gym. But
              what about everyone else?
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Box 1 */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-purple-200/70 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4), 0 0 15px rgba(139, 92, 246, 0.2)",
                borderColor: "#8b5cf6",
                backgroundColor: "rgba(255, 255, 255, 0.9)"
              }}
              viewport={{ once: true }}
            >
              {/* Main decorative bubble */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/70 to-purple-300/30 rounded-full -mr-16 -mt-16 z-0 backdrop-blur-md"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Additional floating bubbles */}
              <motion.div 
                className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-purple-50/40 to-purple-200/20 rounded-full z-0"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.5, 0.2],
                  y: [0, -8, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute top-1/2 left-0 w-12 h-12 bg-gradient-to-r from-purple-100/30 to-transparent rounded-full -ml-6 z-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, 5, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3.5,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="bg-gradient-to-br from-purple-100 to-purple-200 w-14 h-14 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-md shadow-purple-200/50"
                whileHover={{ rotate: [0, -10, 10, -10, 0], boxShadow: "0 6px 15px rgba(139, 92, 246, 0.4), 0 0 5px rgba(139, 92, 246, 0.2)" }}
                transition={{ duration: 0.5 }}
              >
                <motion.span 
                  className="text-2xl font-bold text-purple-800"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    repeatType: "reverse" 
                  }}
                >
                  1
                </motion.span>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-purple-800 mb-4 relative z-10 drop-shadow-sm"
                whileHover={{ x: 5 }}
              >
                Overwhelmed by Options
              </motion.h3>
              <p className="text-gray-600 relative z-10 text-opacity-90 leading-relaxed">
                Contradictory advice, aggressive marketing, and complicated
                programs make starting your fitness journey confusing and
                intimidating.
              </p>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-purple-200/70 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4), 0 0 15px rgba(139, 92, 246, 0.2)",
                borderColor: "#8b5cf6",
                backgroundColor: "rgba(255, 255, 255, 0.9)"
              }}
              viewport={{ once: true }}
            >
              {/* Main decorative bubble */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/70 to-purple-300/30 rounded-full -mr-16 -mt-16 z-0 backdrop-blur-md"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4.5,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Additional floating bubbles */}
              <motion.div 
                className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-tr from-purple-50/40 to-purple-200/20 rounded-full z-0"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.5, 0.2],
                  y: [0, -8, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5.5,
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute top-1/3 left-0 w-12 h-12 bg-gradient-to-r from-purple-100/30 to-transparent rounded-full -ml-6 z-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, 5, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="bg-gradient-to-br from-purple-100 to-purple-200 w-14 h-14 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-md shadow-purple-200/50"
                whileHover={{ rotate: [0, -10, 10, -10, 0], boxShadow: "0 6px 15px rgba(139, 92, 246, 0.4), 0 0 5px rgba(139, 92, 246, 0.2)" }}
                transition={{ duration: 0.5 }}
              >
                <motion.span 
                  className="text-2xl font-bold text-purple-800"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    repeatType: "reverse",
                    delay: 0.3
                  }}
                >
                  2
                </motion.span>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-purple-800 mb-4 relative z-10 drop-shadow-sm"
                whileHover={{ x: 5 }}
              >
                Fear of Judgment
              </motion.h3>
              <p className="text-gray-600 relative z-10 text-opacity-90 leading-relaxed">
                The gym can feel intimidating when you're just starting out. Many
                avoid exercise altogether for fear of doing it wrong or being
                judged.
              </p>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-purple-200/70 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4), 0 0 15px rgba(139, 92, 246, 0.2)",
                borderColor: "#8b5cf6",
                backgroundColor: "rgba(255, 255, 255, 0.9)"
              }}
              viewport={{ once: true }}
            >
              {/* Main decorative bubble */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tr from-purple-100/70 to-purple-300/30 rounded-full -mr-16 -mt-16 z-0 backdrop-blur-md"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Additional floating bubbles */}
              <motion.div 
                className="absolute bottom-10 left-6 w-20 h-20 bg-gradient-to-tr from-purple-50/40 to-purple-200/20 rounded-full z-0"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.5, 0.2],
                  y: [0, -8, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute top-1/4 left-1 w-12 h-12 bg-gradient-to-r from-purple-100/30 to-transparent rounded-full z-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, 5, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="bg-gradient-to-br from-purple-100 to-purple-200 w-14 h-14 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-md shadow-purple-200/50"
                whileHover={{ rotate: [0, -10, 10, -10, 0], boxShadow: "0 6px 15px rgba(139, 92, 246, 0.4), 0 0 5px rgba(139, 92, 246, 0.2)" }}
                transition={{ duration: 0.5 }}
              >
                <motion.span 
                  className="text-2xl font-bold text-purple-800"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    repeatType: "reverse",
                    delay: 0.6 
                  }}
                >
                  3
                </motion.span>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-purple-800 mb-4 relative z-10 drop-shadow-sm"
                whileHover={{ x: 5 }}
              >
                Cycle of Frustration
              </motion.h3>
              <p className="text-gray-600 relative z-10 text-opacity-90 leading-relaxed">
                Start-stop patterns lead to disappointment, reinforcing the belief
                that you "just aren't a fitness person" when actually you just
                need the right approach.
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </motion.section>
  );
}
