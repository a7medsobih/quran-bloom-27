import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Heart } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "الرئيسية", href: "#home" },
    { label: "عن الجمعية", href: "#about" },
    { label: "الأقسام", href: "#sections" },
    { label: "المكتبة", href: "#library" },
    { label: "المدونات", href: "#blogs" },
    { label: "روابط مهمة", href: "#links" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-amiri">ق</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold font-amiri text-primary">بريده</h1>
              <p className="text-sm text-muted-foreground">جمعية تحفيظ القرآن الكريم</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2 space-x-reverse">
              <User className="w-4 h-4" />
              <span>تسجيل الدخول</span>
            </Button>
            <Button className="btn-success flex items-center space-x-2 space-x-reverse">
              <Heart className="w-4 h-4" />
              <span>تبرع الآن</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="pb-4 border-b">
                    <h2 className="text-xl font-bold font-amiri text-primary">بريده</h2>
                    <p className="text-sm text-muted-foreground">جمعية تحفيظ القرآن الكريم</p>
                  </div>
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4 space-y-3">
                    <Button variant="outline" className="w-full">
                      <User className="w-4 h-4 ml-2" />
                      تسجيل الدخول
                    </Button>
                    <Button className="btn-success w-full">
                      <Heart className="w-4 h-4 ml-2" />
                      تبرع الآن
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;