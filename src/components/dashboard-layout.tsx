"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Dumbbell,
  Users,
  ShoppingBag,
  Settings,
  Menu,
  X,
  Bell,
  User,
} from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isMobile?: boolean;
}

const NavItem = ({
  href,
  icon,
  label,
  isActive,
  isMobile = false,
}: NavItemProps) => {
  const baseClasses =
    "flex items-center gap-2 p-3 rounded-lg transition-all duration-200";
  const desktopClasses = isActive
    ? "bg-gradient-to-r from-[#5E60CE] to-[#6A64F1] text-white shadow-md"
    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2C2C2E] hover:scale-105";
  const mobileClasses = isActive
    ? "text-[#5E60CE]"
    : "text-gray-600 dark:text-gray-300";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
    >
      <div
        className={`${isActive && !isMobile ? "text-white" : "text-[#5E60CE]"}`}
      >
        {icon}
      </div>
      <span className={isMobile ? "text-sm" : ""}>{label}</span>
      {isActive && !isMobile && (
        <div className="absolute w-1 h-8 bg-white rounded-full right-0"></div>
      )}
    </Link>
  );
};

const navItems = [
  {
    href: "/dashboard",
    icon: <Activity className="w-5 h-5" />,
    label: "Dashboard",
  },
  {
    href: "/dashboard/workout",
    icon: <Dumbbell className="w-5 h-5" />,
    label: "Workout Plan",
  },
  {
    href: "/dashboard/community",
    icon: <Users className="w-5 h-5" />,
    label: "Community",
  },
  {
    href: "/dashboard/shop",
    icon: <ShoppingBag className="w-5 h-5" />,
    label: "Shop",
  },
  {
    href: "/dashboard/settings",
    icon: <Settings className="w-5 h-5" />,
    label: "Settings",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1C1C1E] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1C1C1E] dark:to-[#2C2C2E]">
      {/* Top Navigation for Mobile */}
      {isMobile && (
        <header className="sticky top-0 z-30 w-full bg-white/90 dark:bg-[#1C1C1E]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/dashboard" className="flex items-center">
              <Activity className="w-6 h-6 text-[#5E60CE] mr-2" />
              <span className="font-bold dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-[#5E60CE] to-[#6A64F1]">
                FitTrack
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Button>
              <ThemeSwitcher />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-1">
                    <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[320px] border-l border-gray-200 dark:border-gray-800"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center py-4">
                      <div className="flex items-center">
                        <Activity className="w-6 h-6 text-[#5E60CE] mr-2" />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5E60CE] to-[#6A64F1]">
                          FitTrack
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                      >
                        <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-3 p-4 mb-4 bg-gray-50 dark:bg-[#2C2C2E] rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-[#5E60CE]/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-[#5E60CE]" />
                      </div>
                      <div>
                        <p className="font-medium dark:text-white">John Doe</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Premium Member
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={async () => {
                        const { createClient } = await import(
                          "../../supabase/client"
                        );
                        const supabase = createClient();
                        await supabase.auth.signOut();
                        window.location.href = "/sign-in";
                      }}
                      className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded-xl flex items-center justify-center gap-2 transition-colors mb-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      Sign Out
                    </button>
                    <nav className="flex flex-col gap-2 mt-2">
                      {navItems.map((item) => (
                        <NavItem
                          key={item.href}
                          href={item.href}
                          icon={item.icon}
                          label={item.label}
                          isActive={pathname === item.href}
                        />
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      )}

      <div className="flex">
        {/* Sidebar for Desktop */}
        {!isMobile && (
          <aside className="fixed left-0 top-0 z-30 h-screen w-64 bg-white/90 dark:bg-[#1C1C1E]/90 backdrop-blur-md border-r border-gray-200 dark:border-gray-800 p-4 shadow-md">
            <div className="flex items-center mb-8">
              <Activity className="w-6 h-6 text-[#5E60CE] mr-2" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5E60CE] to-[#6A64F1]">
                FitTrack
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 mb-6 bg-gray-50 dark:bg-[#2C2C2E] rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#5E60CE]/20 flex items-center justify-center">
                <User className="w-5 h-5 text-[#5E60CE]" />
              </div>
              <div>
                <p className="font-medium dark:text-white">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Premium Member
                </p>
              </div>
            </div>
            <nav className="flex flex-col gap-2 relative">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  isActive={pathname === item.href}
                />
              ))}
            </nav>
            <div className="absolute bottom-8 left-4 right-4 space-y-3">
              <button
                onClick={async () => {
                  const { createClient } = await import(
                    "../../supabase/client"
                  );
                  const supabase = createClient();
                  await supabase.auth.signOut();
                  window.location.href = "/sign-in";
                }}
                className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                Sign Out
              </button>
              <div className="p-4 bg-gray-50 dark:bg-[#2C2C2E] rounded-xl flex items-center justify-between">
                <span className="text-sm font-medium dark:text-white">
                  Theme
                </span>
                <ThemeSwitcher />
              </div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main
          className={`flex-1 ${!isMobile ? "ml-64" : ""} p-4 md:p-8 pb-20 md:pb-8`}
        >
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>

        {/* Bottom Navigation for Mobile */}
        {isMobile && (
          <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white/90 dark:bg-[#1C1C1E]/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="grid grid-cols-5 h-16">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  isActive={pathname === item.href}
                  isMobile={true}
                />
              ))}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
