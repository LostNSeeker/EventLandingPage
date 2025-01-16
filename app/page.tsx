"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CalendarIcon,
  MapPin,
  Star,
  Utensils,
  Wifi,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Experience Luxury",
    subtitle: "Discover our handpicked collection of luxury accommodations",
  },
  {
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Exquisite Dining",
    subtitle: "Savor world-class cuisine in our restaurants",
  },
  {
    url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Premium Wellness",
    subtitle: "Rejuvenate your body and mind in our spa",
  },
];

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Carousel */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
        <div className="absolute inset-0">
          <Carousel
            className="relative w-full h-full"
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div
                    className="relative w-full h-full"
                    style={{
                      backgroundImage: `url('${image.url}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundAttachment: "fixed",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {image.title}
                      </h1>
                      <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                        {image.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button
                          size="lg"
                          className="bg-primary hover:bg-primary/90"
                        >
                          Book Now
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="bg-transparent text-white hover:bg-white/20"
                        >
                          Take a Tour
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </div>

      {/* Booking Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative z-10 mb-20">
        <Card className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Check In</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? date.toLocaleDateString() : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Check Out</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Pick a date
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Guests</label>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              2 Adults, 0 Children
            </Button>
          </div>
          <div className="flex items-end">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Search Rooms
            </Button>
          </div>
        </Card>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground">
            Experience the perfect blend of luxury and comfort
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Star className="h-8 w-8" />,
              title: "5-Star Rating",
              description: "Consistently rated among the best hotels",
            },
            {
              icon: <Wifi className="h-8 w-8" />,
              title: "High-Speed WiFi",
              description: "Stay connected throughout your stay",
            },
            {
              icon: <Utensils className="h-8 w-8" />,
              title: "Fine Dining",
              description: "Award-winning restaurants and bars",
            },
            {
              icon: <MapPin className="h-8 w-8" />,
              title: "Prime Location",
              description: "Located in the heart of the city",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Room Showcase */}
      <div className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Luxury Rooms</h2>
            <p className="text-muted-foreground">
              Choose from our selection of premium accommodations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                title: "Deluxe Suite",
                price: "$299",
                description: "Spacious room with city view",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                title: "Executive Room",
                price: "$399",
                description: "Premium room with ocean view",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                title: "Presidential Suite",
                price: "$599",
                description: "Luxury suite with panoramic view",
              },
            ].map((room, index) => (
              <Card key={index} className="overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${room.image}')` }}
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{room.title}</h3>
                    <span className="text-primary font-bold">
                      {room.price}
                      <span className="text-sm text-muted-foreground">
                        /night
                      </span>
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {room.description}
                  </p>
                  <Button className="w-full">Book Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Luxury Hotel</h3>
              <p className="text-muted-foreground">
                Experience the epitome of luxury and comfort in our premium
                accommodations.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@luxuryhotel.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Button variant="link" className="p-0 h-auto">
                  About Us
                </Button>
                <br />
                <Button variant="link" className="p-0 h-auto">
                  Rooms
                </Button>
                <br />
                <Button variant="link" className="p-0 h-auto">
                  Dining
                </Button>
                <br />
                <Button variant="link" className="p-0 h-auto">
                  Spa & Wellness
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Luxury Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
