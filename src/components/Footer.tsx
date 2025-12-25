import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-xl font-bold text-primary-foreground">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-foreground">Balan Store</span>
                <span className="text-xs text-muted-foreground">Wholesale & Retail</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for quality groceries at the best prices. Serving Nagercoil and surrounding areas with fresh products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+919443145242" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>094431 45242</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Railway Feeder Rd, Kottar,<br />Nagercoil, Tamil Nadu 629002</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5 text-primary" />
                <span>Mon - Sat: 8:00 AM - 9:00 PM<br />Sunday: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Map Link */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Find Us</h4>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Balan+store+Kottar+Nagercoil+Tamil+Nadu+629002"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-border bg-muted hover:border-primary transition-colors"
            >
              <div className="flex h-32 items-center justify-center bg-primary-light">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-primary" />
                  <span className="mt-2 block text-sm font-medium text-primary">View on Google Maps</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Balan Store. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Fresh Groceries at Best Prices – Wholesale & Retail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
