import DashboardLayout from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  Dumbbell,
  Trophy,
  Calendar,
  ArrowUp,
  ArrowDown,
  Zap,
} from "lucide-react";
import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/server";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">
            Welcome back{user?.email ? `, ${user.email.split("@")[0]}` : ""}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here's an overview of your fitness journey
          </p>
        </div>

        {/* Progress Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Daily Steps",
              value: "8,432",
              target: "10,000",
              icon: <Activity className="w-5 h-5" />,
              change: "+12%",
              isPositive: true,
            },
            {
              title: "Calories Burned",
              value: "1,842",
              target: "2,000",
              icon: <Zap className="w-5 h-5" />,
              change: "-3%",
              isPositive: false,
            },
            {
              title: "Workouts",
              value: "4",
              target: "5",
              icon: <Dumbbell className="w-5 h-5" />,
              change: "+1",
              isPositive: true,
            },
            {
              title: "Reward Points",
              value: "350",
              target: "",
              icon: <Trophy className="w-5 h-5" />,
              change: "+45",
              isPositive: true,
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.title}
                </CardTitle>
                <div className="p-2 bg-[#5E60CE]/10 rounded-full">
                  <div className="text-[#5E60CE]">{item.icon}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold dark:text-white">
                  {item.value}
                </div>
                <div className="flex items-center mt-1">
                  {item.target && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mr-2">
                      Target: {item.target}
                    </p>
                  )}
                  <div
                    className={`flex items-center text-xs ${item.isPositive ? "text-green-500" : "text-red-500"}`}
                  >
                    {item.isPositive ? (
                      <ArrowUp className="w-3 h-3 mr-1" />
                    ) : (
                      <ArrowDown className="w-3 h-3 mr-1" />
                    )}
                    {item.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl dark:text-white">
                    Today's Schedule
                  </CardTitle>
                  <CardDescription>
                    Your planned workouts for today
                  </CardDescription>
                </div>
                <div className="p-2 bg-[#5E60CE]/10 rounded-full">
                  <Calendar className="w-5 h-5 text-[#5E60CE]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    time: "07:00 AM",
                    activity: "Morning Cardio",
                    duration: "30 min",
                    completed: true,
                  },
                  {
                    time: "12:30 PM",
                    activity: "Lunch Break Stretch",
                    duration: "15 min",
                    completed: false,
                  },
                  {
                    time: "06:00 PM",
                    activity: "Full Body Strength",
                    duration: "45 min",
                    completed: false,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 dark:bg-[#2C2C2E] rounded-lg"
                  >
                    <div
                      className={`w-3 h-3 rounded-full mr-4 ${item.completed ? "bg-green-500" : "bg-[#5E60CE]"}`}
                    ></div>
                    <div className="flex-1">
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
            </CardContent>
          </Card>

          {/* AI Assistant Tips */}
          <Card className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl dark:text-white">
                  AI Assistant Tips
                </CardTitle>
                <div className="p-2 bg-[#5E60CE]/10 rounded-full">
                  <Zap className="w-5 h-5 text-[#5E60CE]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Try to increase your daily steps by 500 each week for better results.",
                  "Your evening workouts have been more consistent than morning ones.",
                  "Consider adding more protein to your diet based on your workout intensity.",
                ].map((tip, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 dark:bg-[#2C2C2E] rounded-lg"
                  >
                    <p className="text-sm dark:text-white">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Progress Chart */}
          <Card className="lg:col-span-3 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <CardHeader>
              <CardTitle className="text-xl dark:text-white">
                Weekly Progress
              </CardTitle>
              <CardDescription>
                Your activity over the past 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-[#2C2C2E] rounded-lg">
                <p className="text-gray-400 dark:text-gray-500">
                  Progress Chart Visualization
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
