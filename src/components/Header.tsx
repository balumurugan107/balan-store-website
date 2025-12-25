import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-xl font-bold text-primary-foreground">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-foreground">Balan Store</span>
            <span className="text-xs text-muted-foreground">Wholesale & Retail</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path)
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+919443145242" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="h-4 w-4 text-primary" />
            094431 45242
          </a>
          <Button asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <a href="tel:+919443145242" className="flex items-center gap-2 text-base font-medium text-foreground">
                <Phone className="h-5 w-5 text-primary" />
                094431 45242
              </a>
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
