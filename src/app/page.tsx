import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  Activity,
  Dumbbell,
  Users,
  Trophy,
  Calendar,
} from "lucide-react";
import { createClient } from "../../supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#1C1C1E] dark:to-[#2C2C2E]">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-[#1C1C1E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Why Choose FitTrack
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transform your fitness journey with our adaptive tracking platform
              designed for all your workout needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Activity className="w-6 h-6" />,
                title: "Progress Tracking",
                description: "Real-time stats and visual progress charts",
              },
              {
                icon: <Dumbbell className="w-6 h-6" />,
                title: "Custom Workouts",
                description: "Personalized plans for your fitness goals",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community Support",
                description: "Connect with fitness enthusiasts",
              },
              {
                icon: <Trophy className="w-6 h-6" />,
                title: "Achievement System",
                description: "Earn rewards for hitting milestones",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-[#2C2C2E] rounded-xl shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
              >
                <div className="text-[#5E60CE] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#5E60CE] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-purple-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-purple-100">Workouts Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-100">Goal Achievement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Workout Preview */}
      <section className="py-20 bg-white dark:bg-[#1C1C1E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Your Fitness Journey Starts Today
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get a personalized dashboard with daily workouts, progress
              tracking, and AI-powered recommendations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-[#2C2C2E] rounded-xl overflow-hidden shadow-lg">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-[#5E60CE] mr-2" />
                <h3 className="font-medium dark:text-white">
                  Today's Schedule
                </h3>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Monday, June 10
              </span>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  {
                    time: "07:00 AM",
                    activity: "Morning Cardio",
                    duration: "30 min",
                  },
                  {
                    time: "12:30 PM",
                    activity: "Lunch Break Stretch",
                    duration: "15 min",
                  },
                  {
                    time: "06:00 PM",
                    activity: "Full Body Strength",
                    duration: "45 min",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-white dark:bg-[#3C3C3E] rounded-lg"
                  >
                    <div>
                      <p className="font-medium dark:text-white">
                        {item.activity}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.time}
                      </p>
                    </div>
                    <div className="text-[#5E60CE] text-sm font-medium">
                      {item.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#2C2C2E]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already achieved their fitness
            goals with our platform.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-[#5E60CE] rounded-lg hover:bg-[#4E50BE] transition-colors"
          >
            Start Your Journey
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
