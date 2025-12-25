import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Balan Store | Grocery Shop in Nagercoil</title>
        <meta name="description" content="Contact Balan Store for wholesale and retail grocery inquiries. Visit us at Railway Feeder Rd, Kottar, Nagercoil or call 094431 45242." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Page Header */}
          <section className="bg-gradient-to-br from-primary-light via-background to-warm py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-sm font-medium text-primary">Get in Touch</span>
                <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
                  Contact Us
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  We'd love to hear from you. Reach out for orders, inquiries, or just to say hello!
                </p>
              </div>
            </div>
          </section>

          {/* Contact Details & Map */}
          <section className="py-16 md:py-20">
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                      Visit Our Store
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      Come visit us at our store in Kottar, Nagercoil. We're always happy to assist you with your grocery needs.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Phone */}
                    <a
                      href="tel:+919443145242"
                      className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-medium"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-lg font-medium text-primary">094431 45242</p>
                        <p className="text-sm text-muted-foreground">Call for orders & inquiries</p>
                      </div>
                    </a>

                    {/* Address */}
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Balan+store+Kottar+Nagercoil+Tamil+Nadu+629002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-medium"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Address</h3>
                        <p className="text-foreground">Railway Feeder Rd, Kottar</p>
                        <p className="text-foreground">Nagercoil, Tamil Nadu 629002</p>
                        <p className="text-sm text-primary mt-1">View on Google Maps →</p>
                      </div>
                    </a>

                    {/* Hours */}
                    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Business Hours</h3>
                        <p className="text-foreground">Monday - Saturday: 8:00 AM - 9:00 PM</p>
                        <p className="text-foreground">Sunday: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button asChild size="lg" className="flex-1">
                      <a href="tel:+919443145242">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="flex-1">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Railway+Feeder+Rd+Kottar+Nagercoil+Tamil+Nadu+629002"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="mr-2 h-5 w-5" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Map Embed */}
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                    Find Us on Map
                  </h2>
                  <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-medium">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.6433205087928!2d77.43743323886832!3d8.173850952927038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f116fde4b8e3%3A0xd39fe2c6d57c63ad!2sBalan%20Store!5e0!3m2!1sen!2sin!4v1766662790460!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Balan Store Location"
                    ></iframe>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Located on Railway Feeder Road, near Kottar Junction. Easy to find and accessible for all.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Info */}
          <section className="bg-muted/50 py-12">
            <div className="container">
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground">Wholesale Inquiries</h3>
                <p className="mt-2 text-muted-foreground">
                  Looking to place bulk orders for your business? Call us directly for special wholesale prices and regular supply arrangements.
                </p>
                <a
                  href="tel:+919443145242"
                  className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
                >
                  <Phone className="h-5 w-5" />
                  094431 45242
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
