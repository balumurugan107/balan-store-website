import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ContactSection from "@/components/ContactSection";

const products = [
  { name: "Onion", description: "Fresh, quality onions perfect for all your cooking needs. Available in bulk quantities for restaurants and households.", emoji: "🧅", category: "Vegetables" },
  { name: "Potatoes", description: "Premium quality potatoes sourced from the best farms. Great for chips, curries, and all types of cooking.", emoji: "🥔", category: "Vegetables" },
  { name: "Garlic", description: "Fresh garlic bulbs to add flavor to your dishes. Essential for every kitchen.", emoji: "🧄", category: "Vegetables" },
  { name: "Rice", description: "Premium rice varieties including Sona Masoori, Basmati, and local varieties at competitive prices.", emoji: "🍚", category: "Grains" },
  { name: "Aval (Flattened Rice)", description: "Fresh, quality aval perfect for traditional South Indian breakfast and snacks.", emoji: "🌾", category: "Grains" },
  { name: "Cereals", description: "Wide range of cereals including wheat, ragi, corn flakes, and more for healthy meals.", emoji: "🥣", category: "Grains" },
  { name: "Cooking Oil", description: "High-quality cooking oils including groundnut, sunflower, and coconut oil from trusted brands.", emoji: "🫒", category: "Cooking" },
  { name: "Maida (Refined Flour)", description: "Fine quality maida for baking, making rotis, and various culinary preparations.", emoji: "🌿", category: "Flour" },
  { name: "Atta (Wheat Flour)", description: "Fresh, stone-ground wheat flour for healthy chapatis and rotis.", emoji: "🫓", category: "Flour" },
  { name: "Sugar", description: "Pure white and brown sugar varieties for all your sweetening needs.", emoji: "🍬", category: "Cooking" },
  { name: "Pulses & Lentils", description: "Wide variety of dals including toor, moong, chana, urad dal at wholesale prices.", emoji: "🫘", category: "Grains" },
  { name: "Spices", description: "Fresh and aromatic spices including turmeric, chili powder, coriander, and cumin.", emoji: "🌶️", category: "Spices" },
];

const categories = ["All", "Vegetables", "Grains", "Cooking", "Flour", "Spices"];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products - Balan Store | Wholesale Groceries in Nagercoil</title>
        <meta name="description" content="Browse our wide range of grocery products including onions, potatoes, rice, cereals, cooking oils, and more. Wholesale and retail available at Balan Store Nagercoil." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Page Header */}
          <section className="bg-gradient-to-br from-primary-light via-background to-warm py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-sm font-medium text-primary">Our Products</span>
                <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
                  Quality Groceries
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Explore our wide range of fresh vegetables, premium grains, cooking essentials, and more. All available at wholesale and retail prices.
                </p>
              </div>
            </div>
          </section>

          {/* Category Filters */}
          <section className="border-b border-border bg-background py-6">
            <div className="container">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                      category === "All"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-12 md:py-16">
            <div className="container">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>

              {/* Bulk Order Note */}
              <div className="mt-12 rounded-xl border border-border bg-muted/50 p-6 text-center md:p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground">Looking for Bulk Orders?</h3>
                <p className="mt-2 text-muted-foreground">
                  We offer special wholesale prices for bulk purchases. Contact us for custom quotes and regular supply arrangements.
                </p>
                <a
                  href="tel:+919443145242"
                  className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Call 094431 45242 for Wholesale Inquiries
                </a>
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

export default Products;
