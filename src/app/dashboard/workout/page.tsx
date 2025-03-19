import DashboardLayout from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dumbbell, Clock, Calendar, ChevronRight } from "lucide-react";
import { createClient } from "../../../../supabase/server";

export default async function WorkoutPlan() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const workoutPlans = [
    {
      id: 1,
      name: "Full Body Strength",
      description:
        "Complete strength training routine targeting all major muscle groups",
      duration: "45 min",
      level: "Intermediate",
      exercises: [
        { name: "Squats", sets: 3, reps: 12, rest: "60 sec" },
        { name: "Push-ups", sets: 3, reps: 15, rest: "60 sec" },
        { name: "Deadlifts", sets: 3, reps: 10, rest: "90 sec" },
        { name: "Shoulder Press", sets: 3, reps: 12, rest: "60 sec" },
        { name: "Lunges", sets: 3, reps: 10, rest: "60 sec" },
      ],
    },
    {
      id: 2,
      name: "HIIT Cardio",
      description: "High-intensity interval training to maximize calorie burn",
      duration: "30 min",
      level: "Advanced",
      exercises: [
        { name: "Jumping Jacks", duration: "45 sec", rest: "15 sec" },
        { name: "Mountain Climbers", duration: "45 sec", rest: "15 sec" },
        { name: "Burpees", duration: "45 sec", rest: "15 sec" },
        { name: "High Knees", duration: "45 sec", rest: "15 sec" },
        { name: "Plank Jacks", duration: "45 sec", rest: "15 sec" },
      ],
    },
    {
      id: 3,
      name: "Yoga Flow",
      description:
        "Gentle yoga sequence to improve flexibility and reduce stress",
      duration: "40 min",
      level: "Beginner",
      exercises: [
        { name: "Sun Salutation", duration: "5 min" },
        { name: "Warrior Poses", duration: "10 min" },
        { name: "Balance Poses", duration: "10 min" },
        { name: "Floor Sequence", duration: "10 min" },
        { name: "Savasana", duration: "5 min" },
      ],
    },
  ];

  const weeklySchedule = [
    { day: "Monday", workout: "Full Body Strength", time: "6:00 PM" },
    { day: "Tuesday", workout: "HIIT Cardio", time: "7:00 AM" },
    { day: "Wednesday", workout: "Rest Day", time: "" },
    { day: "Thursday", workout: "Yoga Flow", time: "6:30 PM" },
    { day: "Friday", workout: "Full Body Strength", time: "6:00 PM" },
    { day: "Saturday", workout: "HIIT Cardio", time: "9:00 AM" },
    { day: "Sunday", workout: "Rest Day", time: "" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">
            Workout Plan
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Customize your fitness routine
          </p>
        </div>

        <Tabs defaultValue="plans">
          <TabsList className="mb-6">
            <TabsTrigger value="plans">Workout Plans</TabsTrigger>
            <TabsTrigger value="schedule">Weekly Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workoutPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl dark:text-white">
                          {plan.name}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {plan.description}
                        </CardDescription>
                      </div>
                      <div className="p-2 bg-[#5E60CE]/10 rounded-full">
                        <Dumbbell className="w-5 h-5 text-[#5E60CE]" />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-2">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-[#5E60CE] mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {plan.duration}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Level: {plan.level}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-3 dark:text-white">
                      Exercises:
                    </h4>
                    <div className="space-y-2">
                      {plan.exercises.map((exercise, index) => (
                        <div
                          key={index}
                          className="p-2 bg-gray-50 dark:bg-[#2C2C2E] rounded-lg flex justify-between items-center"
                        >
                          <span className="font-medium dark:text-white">
                            {exercise.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {exercise.sets && exercise.reps
                              ? `${exercise.sets} × ${exercise.reps}`
                              : exercise.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <Card className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl dark:text-white">
                    Weekly Schedule
                  </CardTitle>
                  <div className="p-2 bg-[#5E60CE]/10 rounded-full">
                    <Calendar className="w-5 h-5 text-[#5E60CE]" />
                  </div>
                </div>
                <CardDescription>
                  Your workout plan for this week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklySchedule.map((day, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gray-50 dark:bg-[#2C2C2E] rounded-lg"
                    >
                      <div className="w-16 font-medium dark:text-white">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium dark:text-white">
                          {day.workout}
                        </p>
                        {day.time && (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {day.time}
                          </p>
                        )}
                      </div>
                      {day.workout !== "Rest Day" && (
                        <button className="p-2 text-[#5E60CE] hover:bg-[#5E60CE]/10 rounded-full transition-colors">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
