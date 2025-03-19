import DashboardLayout from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { createClient } from "../../../../supabase/server";

export default async function Shop() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const products = [
    {
      id: 1,
      name: "Premium Fitness Tracker",
      description:
        "Advanced tracking for steps, heart rate, sleep, and workouts",
      price: 129.99,
      rating: 4.8,
      reviews: 245,
      image:
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?w=800&q=80",
      category: "Devices",
    },
    {
      id: 2,
      name: "Resistance Bands Set",
      description: "Complete set of 5 resistance bands for home workouts",
      price: 34.99,
      rating: 4.6,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1598447067949-58dbc38c8d9d?w=800&q=80",
      category: "Equipment",
    },
    {
      id: 3,
      name: "Protein Powder - Chocolate",
      description: "25g protein per serving, 30 servings",
      price: 49.99,
      rating: 4.5,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80",
      category: "Nutrition",
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      description: "Sweat-resistant earbuds perfect for workouts",
      price: 89.99,
      rating: 4.7,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
      category: "Accessories",
    },
    {
      id: 5,
      name: "Yoga Mat - Premium",
      description: "Non-slip, eco-friendly yoga mat with carrying strap",
      price: 59.99,
      rating: 4.9,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&q=80",
      category: "Equipment",
    },
    {
      id: 6,
      name: "Fitness Subscription - 1 Year",
      description: "Access to premium workout plans and nutrition guides",
      price: 149.99,
      rating: 4.8,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      category: "Subscriptions",
    },
    {
      id: 7,
      name: "Adjustable Dumbbells Set",
      description: "Space-saving design, adjustable from 5-52.5 lbs",
      price: 299.99,
      rating: 4.7,
      reviews: 142,
      image:
        "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&q=80",
      category: "Equipment",
    },
    {
      id: 8,
      name: "Fitness T-Shirt",
      description: "Moisture-wicking fabric, comfortable fit",
      price: 29.99,
      rating: 4.5,
      reviews: 231,
      image:
        "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800&q=80",
      category: "Apparel",
    },
  ];

  const categories = [
    "All",
    "Equipment",
    "Nutrition",
    "Apparel",
    "Accessories",
    "Devices",
    "Subscriptions",
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white">Shop</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Fitness gear and supplements
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <Input
              placeholder="Search products..."
              className="pl-10 bg-white dark:bg-[#2C2C2E] border-gray-200 dark:border-gray-700"
            />
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-gray-200 dark:border-gray-700 dark:text-white"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </Button>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-2 gap-2 hide-scrollbar">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={
                index === 0
                  ? "bg-[#5E60CE] hover:bg-[#4E50BE]"
                  : "border-gray-200 dark:border-gray-700 dark:text-white"
              }
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg dark:text-white">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="text-lg font-bold dark:text-white">
                  ${product.price.toFixed(2)}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#5E60CE] hover:bg-[#4E50BE]">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
