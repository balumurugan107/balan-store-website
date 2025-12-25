import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { CheckCircle, Users, Truck, Shield, Heart } from "lucide-react";

const values = [
  { icon: CheckCircle, title: "Quality First", description: "We source only the freshest and finest products for our customers." },
  { icon: Users, title: "Customer Focus", description: "Your satisfaction is our priority. We listen and deliver what you need." },
  { icon: Truck, title: "Reliable Supply", description: "Consistent stock availability for both retail and wholesale needs." },
  { icon: Shield, title: "Fair Pricing", description: "Competitive prices without compromising on quality." },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Balan Store | Trusted Grocery Shop in Nagercoil</title>
        <meta name="description" content="Learn about Balan Store - over 15 years serving Nagercoil with quality groceries. Your trusted partner for wholesale and retail grocery needs in Kottar." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Page Header */}
          <section className="bg-gradient-to-br from-primary-light via-background to-warm py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-sm font-medium text-primary">About Us</span>
                <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
                  Our Story
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  A trusted name in grocery retail serving Nagercoil for over 15 years
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16 md:py-20">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                    Your Trusted Grocery Partner Since Years
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Balan Store was founded with a simple mission: to provide the people of Nagercoil with quality groceries at fair prices. What started as a small shop has grown into a trusted destination for both families and businesses looking for reliable grocery supplies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Located at Railway Feeder Road in Kottar, our store has become a landmark in the community. We take pride in our wide selection of products, from everyday essentials like rice, onions, and potatoes to specialty items like premium cooking oils and fresh spices.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our commitment to customer satisfaction has earned us the trust of thousands of regular customers. Whether you're a homemaker looking for the freshest vegetables or a restaurant owner needing bulk supplies, we're here to serve you with the same dedication and care.
                  </p>
                </div>

                <div className="relative">
                  <div className="aspect-square max-w-md mx-auto rounded-2xl bg-primary-light p-8 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-8xl">🏪</div>
                      <div className="font-serif text-2xl font-bold text-primary">Balan Store</div>
                      <div className="text-sm text-primary/70">Serving Nagercoil Since Years</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-accent flex items-center justify-center text-4xl shadow-medium">
                    <Heart className="h-10 w-10 text-accent-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="bg-muted/50 py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-sm font-medium text-primary">Our Values</span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  What Sets Us Apart
                </h2>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:shadow-medium hover:border-primary/50"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-sm font-medium text-primary">Our Services</span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  How We Serve You
                </h2>
              </div>

              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-3xl text-primary-foreground">
                    🛒
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">Retail Shopping</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Walk into our store and pick exactly what you need. From small quantities for your daily cooking to weekly grocery shopping, we make retail shopping convenient and affordable.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Fresh products daily</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Competitive retail prices</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Wide product selection</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent text-3xl">
                    📦
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">Wholesale Supply</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Running a restaurant, catering service, or retail shop? We offer competitive wholesale prices for bulk orders with consistent supply and quality you can rely on.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Bulk order discounts</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Regular supply arrangements</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Custom quotes available</li>
                  </ul>
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

export default About;
