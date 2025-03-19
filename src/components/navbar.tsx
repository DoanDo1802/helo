import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { Activity, Dumbbell, Users, ShoppingBag, Settings } from "lucide-react";
import UserProfile from "./user-profile";
import { ThemeSwitcher } from "./theme-switcher";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1C1C1E] py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-xl font-bold flex items-center">
          <Activity className="w-6 h-6 text-[#5E60CE] mr-2" />
          <span className="dark:text-white">FitTrack</span>
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="#features"
            className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
          >
            Community
          </Link>
          <Link
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
          >
            About
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <ThemeSwitcher />

          {user ? (
            <>
              <Link href="/dashboard" className="px-4 py-2 text-sm font-medium">
                <Button className="bg-[#5E60CE] hover:bg-[#4E50BE]">
                  Dashboard
                </Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-[#5E60CE] rounded-md hover:bg-[#4E50BE]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
