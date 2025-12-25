import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Order?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Visit our store or call us for wholesale and retail inquiries. We're here to serve you with the best quality groceries.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="tel:+919443145242"
              className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 px-6 py-4 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              <Phone className="h-6 w-6" />
              <div className="text-left">
                <span className="block text-sm opacity-80">Call Us</span>
                <span className="text-lg font-semibold">094431 45242</span>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Balan_store+Kottar+Nagercoil+Tamil+Nadu+629002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 px-6 py-4 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              <MapPin className="h-6 w-6" />
              <div className="text-left">
                <span className="block text-sm opacity-80">Visit Store</span>
                <span className="text-lg font-semibold">View on Maps</span>
              </div>
            </a>
          </div>

          <div className="mt-10">
            <Button asChild variant="warm" size="lg" className="gap-2">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
