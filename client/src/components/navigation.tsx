import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Car, BookOpen, Users, Star, Phone } from "lucide-react";
import { useTrialModal } from "@/hooks/use-trial-modal";
import logo from '../assets/svg/rijschool-traffic.png';

export default function Navigation() {
  const [location] = useLocation();
  const { openModal } = useTrialModal();
  const [mobileOpen, setMobileOpen] = useState(false);

  const kennisbankItems = [
    { href: "/kennisbank/verkeersregels", label: "Verkeersregels" },
    { href: "/kennisbank/examens", label: "Examens" },
    { href: "/kennisbank/tips", label: "Rijlessen Tips" },
    { href: "/kennisbank/voertuigen", label: "Voertuigen" },
  ];

  const cursussenItems = [
    { href: "/cursussen/auto", label: "Auto Rijlessen" },
    { href: "/cursussen/motor", label: "Motor Rijlessen" },
    { href: "/cursussen/bromfiets", label: "Bromfiets" },
    { href: "/cursussen/theorie", label: "Theorie Cursus" },
    { href: "/cursussen/spoed", label: "Spoedcursus" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <img className="logo-img" src={logo} alt="Logo" />
              <span className="text-2xl font-bold text-primary">Rijsschooltraffic</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}>
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/over-ons" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/over-ons") ? "text-primary" : "text-muted-foreground"}`}>
                  Over ons
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/tarieven" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/tarieven") ? "text-primary" : "text-muted-foreground"}`}>
                  Tarieven
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  <BookOpen className="mr-1 h-4 w-4" />
                  Kennisbank
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-48 gap-1 p-2">
                    {kennisbankItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <div className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  <Car className="mr-1 h-4 w-4" />
                  Cursussen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-48 gap-1 p-2">
                    {cursussenItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <div className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/werken-bij-diep" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/werken-bij-diep") ? "text-primary" : "text-muted-foreground"}`}>
                  Werken bij Diep
                </Link>
              </NavigationMenuItem>

              {/*<NavigationMenuItem>
                <Link href="/reviews" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/reviews") ? "text-primary" : "text-muted-foreground"}`}>
                  Reviews
                </Link>
              </NavigationMenuItem>*/}

              <NavigationMenuItem>
                <Link href="/contact" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-muted-foreground"}`}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button onClick={openModal} className="btn-secondary">
            Gratis Proeflies Aanvragen
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Home
                  </Button>
                </Link>
                
                <Link href="/over-ons" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Over ons
                  </Button>
                </Link>
                
                <Link href="/tarieven" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Tarieven
                  </Button>
                </Link>

                <div className="space-y-2">
                  <div className="px-3 py-2 text-sm font-medium text-muted-foreground">Kennisbank</div>
                  {kennisbankItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start pl-6">
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="px-3 py-2 text-sm font-medium text-muted-foreground">Cursussen</div>
                  {cursussenItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start pl-6">
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>

                <Link href="/werken-bij-diep" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Werken bij Diep
                  </Button>
                </Link>

                <Link href="/reviews" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Reviews
                  </Button>
                </Link>

                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Contact
                  </Button>
                </Link>

                <Button 
                  onClick={() => {
                    openModal();
                    setMobileOpen(false);
                  }} 
                  className="w-full btn-secondary mt-4"
                >
                  Gratis Proeflies Aanvragen
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
