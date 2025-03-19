import DashboardLayout from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Bell,
  Shield,
  Moon,
  Sun,
  Smartphone,
  Laptop,
} from "lucide-react";
import { createClient } from "../../../../supabase/server";

export default async function Settings() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Manage your account preferences
        </p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl dark:text-white">
                    Profile Information
                  </CardTitle>
                  <CardDescription>
                    Update your personal details
                  </CardDescription>
                </div>
                <div className="p-2 bg-[#5E60CE]/10 rounded-full">
                  <User className="w-5 h-5 text-[#5E60CE]" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    src={
                      user?.email
                        ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`
                        : undefined
                    }
                  />
                  <AvatarFallback className="text-2xl">
                    {user?.email?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="dark:text-white">
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        defaultValue={user?.email?.split("@")[0] || ""}
                        className="bg-white dark:bg-[#2C2C2E] border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username" className="dark:text-white">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue={
                          user?.email?.split("@")[0].toLowerCase() || ""
                        }
                        className="bg-white dark:bg-[#2C2C2E] border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="dark:text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={user?.email || ""}
                        className="bg-white dark:bg-[#2C2C2E] border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="dark:text-white">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="bg-white dark:bg-[#2C2C2E] border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </div>
                  <Button className="bg-[#5E60CE] hover:bg-[#4E50BE]">
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl dark:text-white">
                    Appearance
                  </CardTitle>
                  <CardDescription>
                    Customize how FitTrack looks
                  </CardDescription>
                </div>
                <div className="p-2 bg-[#5E60CE]/10 rounded-full">
                  <Moon className="w-5 h-5 text-[#5E60CE]" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium dark:text-white">Dark Mode</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Switch between light and dark themes
                    </p>
                  </div>
                  <Switch id="dark-mode" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium dark:text-white">
                      Reduced Motion
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Decrease animations throughout the app
                    </p>
                  </div>
                  <Switch id="reduced-motion" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium dark:text-white">Device Theme</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#2C2C2E] rounded-lg border border-gray-200 dark:border-gray-700">
                      <Smartphone className="w-5 h-5 text-[#5E60CE]" />
                      <span className="dark:text-white">
                        Use Device Settings
                      </span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-[#5E60CE] text-white rounded-lg">
                      <Laptop className="w-5 h-5" />
                      <span>Custom Settings</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl dark:text-white">
                    Notifications
                  </CardTitle>
                  <CardDescription>
                    Manage your notification preferences
                  </CardDescription>
                </div>
                <div className="p-2 bg-[#5E60CE]/10 rounded-full">
                  <Bell className="w-5 h-5 text-[#5E60CE]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Workout Reminders",
                    description: "Receive reminders for scheduled workouts",
                  },
                  {
                    title: "Achievement Alerts",
                    description: "Get notified when you earn badges or rewards",
                  },
                  {
                    title: "Friend Activity",
                    description: "Updates when friends complete workouts",
                  },
                  {
                    title: "Community Challenges",
                    description: "Notifications about new challenges",
                  },
                  {
                    title: "App Updates",
                    description: "Learn about new features and improvements",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#2C2C2E] rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                    <Switch defaultChecked={index < 3} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl dark:text-white">
                    Privacy & Security
                  </CardTitle>
                  <CardDescription>
                    Manage your privacy settings and account security
                  </CardDescription>
                </div>
                <div className="p-2 bg-[#5E60CE]/10 rounded-full">
                  <Shield className="w-5 h-5 text-[#5E60CE]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium dark:text-white">
                    Privacy Settings
                  </h3>
                  {[
                    {
                      title: "Profile Visibility",
                      description: "Who can see your profile information",
                    },
                    {
                      title: "Activity Sharing",
                      description: "Share your workout activity with friends",
                    },
                    {
                      title: "Data Collection",
                      description: "Allow anonymous usage data collection",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#2C2C2E] rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                      <Switch defaultChecked={index < 2} />
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium dark:text-white">Security</h3>
                  <div className="p-4 bg-gray-50 dark:bg-[#2C2C2E] rounded-lg space-y-4">
                    <div>
                      <h4 className="font-medium dark:text-white">
                        Change Password
                      </h4>
                      <div className="mt-2 space-y-3">
                        <div className="space-y-1">
                          <Label htmlFor="current-password" className="text-sm">
                            Current Password
                          </Label>
                          <Input
                            id="current-password"
                            type="password"
                            className="bg-white dark:bg-[#1C1C1E] border-gray-200 dark:border-gray-700"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="new-password" className="text-sm">
                            New Password
                          </Label>
                          <Input
                            id="new-password"
                            type="password"
                            className="bg-white dark:bg-[#1C1C1E] border-gray-200 dark:border-gray-700"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="confirm-password" className="text-sm">
                            Confirm New Password
                          </Label>
                          <Input
                            id="confirm-password"
                            type="password"
                            className="bg-white dark:bg-[#1C1C1E] border-gray-200 dark:border-gray-700"
                          />
                        </div>
                        <Button className="mt-2 bg-[#5E60CE] hover:bg-[#4E50BE]">
                          Update Password
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
