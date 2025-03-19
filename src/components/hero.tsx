import Link from "next/link";
import { ArrowUpRight, Check, Activity, Dumbbell } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-[#1C1C1E]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-[#2C2C2E] dark:via-[#1C1C1E] dark:to-[#2C2C2E] opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              Track{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E60CE] to-blue-500">
                Progress
              </span>{" "}
              with Our Fitness Platform
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Achieve your fitness goals with personalized workout plans,
              progress tracking, and a supportive community. Your journey to a
              healthier you starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-8 py-4 text-white bg-[#5E60CE] rounded-lg hover:bg-[#4E50BE] transition-colors text-lg font-medium"
              >
                Start Your Journey
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center px-8 py-4 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-[#2C2C2E] rounded-lg hover:bg-gray-200 dark:hover:bg-[#3C3C3E] transition-colors text-lg font-medium"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#5E60CE]" />
                <span>Personalized workout plans</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#5E60CE]" />
                <span>Progress tracking & analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#5E60CE]" />
                <span>Community support</span>
              </div>
            </div>

            {/* Hero Image/Mockup */}
            <div className="mt-16 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#5E60CE] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
              <div className="relative bg-white dark:bg-[#2C2C2E] rounded-xl shadow-xl overflow-hidden backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 p-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                  <div className="flex items-center">
                    <Activity className="w-5 h-5 text-[#5E60CE] mr-2" />
                    <span className="font-medium dark:text-white">
                      Today's Progress
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    June 10, 2023
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[
                    {
                      label: "Steps",
                      value: "8,432",
                      icon: <Activity className="w-4 h-4" />,
                    },
                    {
                      label: "Calories",
                      value: "1,842",
                      icon: <Activity className="w-4 h-4" />,
                    },
                    {
                      label: "Workouts",
                      value: "2",
                      icon: <Dumbbell className="w-4 h-4" />,
                    },
                    {
                      label: "Points",
                      value: "350",
                      icon: <Activity className="w-4 h-4" />,
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-[#3C3C3E] p-3 rounded-lg"
                    >
                      <div className="flex items-center text-[#5E60CE] mb-1">
                        {stat.icon}
                        <span className="text-xs ml-1">{stat.label}</span>
                      </div>
                      <div className="text-xl font-bold dark:text-white">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-32 bg-gray-50 dark:bg-[#3C3C3E] rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-500">
                    Progress Chart Visualization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
