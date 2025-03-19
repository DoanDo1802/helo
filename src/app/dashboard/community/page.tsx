import DashboardLayout from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Users, Trophy } from "lucide-react";
import { createClient } from "../../../../supabase/server";

export default async function Community() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
        username: "sarahfit",
      },
      content:
        "Just completed my first 10K run! So proud of my progress over the last 3 months. From barely running 1K to a full 10K today. #FitnessJourney #Running",
      image:
        "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
      timestamp: "2 hours ago",
      likes: 42,
      comments: 8,
      achievement: "10K Run",
    },
    {
      id: 2,
      user: {
        name: "Mike Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
        username: "mike_fitness",
      },
      content:
        "Hit a new personal record on deadlifts today! 315 lbs for 5 reps. Hard work and consistency paying off. What's your PR?",
      image: null,
      timestamp: "5 hours ago",
      likes: 38,
      comments: 15,
      achievement: null,
    },
    {
      id: 3,
      user: {
        name: "Emma Wilson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
        username: "emma_wellness",
      },
      content:
        "Morning yoga session with the most beautiful view. Starting the day with mindfulness and stretching makes all the difference in my energy levels throughout the day.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      timestamp: "1 day ago",
      likes: 76,
      comments: 12,
      achievement: null,
    },
  ];

  const challenges = [
    {
      id: 1,
      title: "30-Day Plank Challenge",
      participants: 1243,
      daysLeft: 18,
      progress: 40,
    },
    {
      id: 2,
      title: "10K Steps Daily",
      participants: 2567,
      daysLeft: 25,
      progress: 20,
    },
    {
      id: 3,
      title: "Hydration Challenge",
      participants: 1876,
      daysLeft: 10,
      progress: 66,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">Community</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with fitness enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage
                      src={
                        user?.email
                          ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`
                          : undefined
                      }
                    />
                    <AvatarFallback>
                      {user?.email?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 bg-gray-100 dark:bg-[#2C2C2E] rounded-full px-4 flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-[#3C3C3E] transition-colors">
                    <span className="text-gray-500 dark:text-gray-400">
                      Share your fitness journey...
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            {posts.map((post) => (
              <Card
                key={post.id}
                className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <Avatar>
                        <AvatarImage src={post.user.avatar} />
                        <AvatarFallback>
                          {post.user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold dark:text-white">
                            {post.user.name}
                          </h3>
                          {post.achievement && (
                            <div className="flex items-center bg-[#5E60CE]/10 text-[#5E60CE] text-xs px-2 py-0.5 rounded-full">
                              <Trophy className="w-3 h-3 mr-1" />
                              {post.achievement}
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          @{post.user.username} · {post.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="mb-4 dark:text-white">{post.content}</p>
                  {post.image && (
                    <div className="rounded-lg overflow-hidden mb-4">
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t border-gray-100 dark:border-gray-800 pt-3">
                  <div className="flex justify-between w-full">
                    <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-[#5E60CE] dark:hover:text-[#5E60CE] transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-[#5E60CE] dark:hover:text-[#5E60CE] transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-[#5E60CE] dark:hover:text-[#5E60CE] transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Challenges */}
            <Card className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl dark:text-white">
                    Active Challenges
                  </CardTitle>
                  <div className="p-2 bg-[#5E60CE]/10 rounded-full">
                    <Trophy className="w-5 h-5 text-[#5E60CE]" />
                  </div>
                </div>
                <CardDescription>
                  Join challenges to earn rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {challenges.map((challenge) => (
                    <div
                      key={challenge.id}
                      className="p-3 bg-gray-50 dark:bg-[#2C2C2E] rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium dark:text-white">
                          {challenge.title}
                        </h4>
                        <div className="text-xs bg-[#5E60CE]/10 text-[#5E60CE] px-2 py-0.5 rounded-full">
                          {challenge.daysLeft} days left
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <Users className="w-4 h-4 mr-1" />
                        {challenge.participants.toLocaleString()} participants
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-[#3C3C3E] rounded-full h-2">
                        <div
                          className="bg-[#5E60CE] h-2 rounded-full"
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#5E60CE] hover:bg-[#4E50BE]">
                  Browse All Challenges
                </Button>
              </CardFooter>
            </Card>

            {/* Suggested Friends */}
            <Card className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl dark:text-white">
                    Suggested Friends
                  </CardTitle>
                  <div className="p-2 bg-[#5E60CE]/10 rounded-full">
                    <Users className="w-5 h-5 text-[#5E60CE]" />
                  </div>
                </div>
                <CardDescription>
                  People you might want to follow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alex Rivera",
                      username: "alex_fit",
                      avatar:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
                    },
                    {
                      name: "Jessica Kim",
                      username: "jess_wellness",
                      avatar:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
                    },
                    {
                      name: "David Chen",
                      username: "david_runs",
                      avatar:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
                    },
                  ].map((friend, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={friend.avatar} />
                          <AvatarFallback>
                            {friend.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium dark:text-white">
                            {friend.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            @{friend.username}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#5E60CE] text-[#5E60CE] hover:bg-[#5E60CE] hover:text-white"
                      >
                        Follow
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
