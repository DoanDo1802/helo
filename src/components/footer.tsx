import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#1C1C1E] border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Features Column */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Features
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Workout Plans
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Progress Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Workout Library
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Nutrition Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Community Forums
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#5E60CE] dark:hover:text-[#5E60CE]"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} FitTrack. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#5E60CE] dark:text-gray-500 dark:hover:text-[#5E60CE]"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#5E60CE] dark:text-gray-500 dark:hover:text-[#5E60CE]"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#5E60CE] dark:text-gray-500 dark:hover:text-[#5E60CE]"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#5E60CE] dark:text-gray-500 dark:hover:text-[#5E60CE]"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
