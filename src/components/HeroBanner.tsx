import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, ShieldCheck, Tag } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-warm">
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Tag className="h-4 w-4" />
              Wholesale & Retail Prices
            </div>
            
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in">
              Fresh Groceries at <span className="text-primary">Best Price</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl max-w-xl mx-auto lg:mx-0" style={{ animationDelay: "0.1s" }}>
              Your one-stop shop for quality groceries. From premium rice and cereals to fresh vegetables and cooking essentials – all at unbeatable wholesale and retail prices.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start" style={{ animationDelay: "0.2s" }}>
              <Button asChild variant="hero" size="lg">
                <Link to="/products" className="gap-2">
                  View Products
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 lg:justify-start" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-5 w-5 text-primary" />
                <span>Bulk Orders Welcome</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full bg-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  <div className="h-24 w-24 rounded-2xl bg-card shadow-medium flex items-center justify-center text-4xl">🧅</div>
                  <div className="h-24 w-24 rounded-2xl bg-card shadow-medium flex items-center justify-center text-4xl">🥔</div>
                  <div className="h-24 w-24 rounded-2xl bg-card shadow-medium flex items-center justify-center text-4xl">🍚</div>
                  <div className="h-24 w-24 rounded-2xl bg-card shadow-medium flex items-center justify-center text-4xl">🧄</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
    </section>
  );
};

export default HeroBanner;
