import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Package, TrendingUp } from "lucide-react";

const featuredProducts = [
  { name: "Onion", description: "Fresh, quality onions perfect for all your cooking needs. Available in bulk.", emoji: "🧅", category: "Vegetables" },
  { name: "Potatoes", description: "Premium quality potatoes sourced from the best farms. Ideal for wholesale.", emoji: "🥔", category: "Vegetables" },
  { name: "Rice & Aval", description: "Premium rice varieties and fresh flattened rice (aval) for traditional recipes.", emoji: "🍚", category: "Grains" },
  { name: "Cooking Oil", description: "High-quality cooking oils from trusted brands at competitive prices.", emoji: "🫒", category: "Cooking" },
];

const stats = [
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: Package, value: "50+", label: "Product Varieties" },
  { icon: TrendingUp, value: "15+", label: "Years Experience" },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Balan Store - Fresh Groceries Wholesale & Retail in Nagercoil</title>
        <meta name="description" content="Balan Store offers fresh groceries at wholesale and retail prices in Nagercoil. Quality onions, potatoes, rice, cereals, oils and more. Call 094431 45242." />
      </Helmet>
      
      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <HeroBanner />

          {/* Stats Section */}
          <section className="border-b border-border bg-background py-12">
            <div className="container">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light">
                      <stat.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="font-serif text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-sm font-medium text-primary">Our Products</span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Quality Groceries for Every Need
                </h2>
                <p className="mt-4 text-muted-foreground">
                  From fresh vegetables to premium grains and cooking essentials, we stock everything your kitchen needs.
                </p>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>

              <div className="mt-10 text-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/products">
                    View All Products
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* About Preview */}
          <section className="bg-muted/50 py-16 md:py-20">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                  <span className="text-sm font-medium text-primary">About Us</span>
                  <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                    Your Trusted Grocery Partner in Nagercoil
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For over 15 years, Balan Store has been serving the Nagercoil community with quality groceries at fair prices. Located at Railway Feeder Road in Kottar, we specialize in both wholesale and retail, making us the perfect choice for families, restaurants, and businesses alike.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our commitment to quality and customer satisfaction has made us a trusted name in grocery retail. Whether you need a small quantity for home or bulk orders for your business, we've got you covered.
                  </p>
                  <Button asChild variant="outline" className="gap-2">
                    <Link to="/about">
                      Learn More About Us
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-40 rounded-xl bg-primary-light flex items-center justify-center text-6xl">🏪</div>
                    <div className="h-32 rounded-xl bg-accent/20 flex items-center justify-center text-5xl">📦</div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-32 rounded-xl bg-accent/20 flex items-center justify-center text-5xl">🛒</div>
                    <div className="h-40 rounded-xl bg-primary-light flex items-center justify-center text-6xl">🤝</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
