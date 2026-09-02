import { Button } from "@/components/ui/button";
import { Phone, MapPin, Navigation } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="font-serif text-4xl font-bold text-secondary">Visit Us</h2>
          <div className="flex items-start gap-3">
            <MapPin className="text-primary w-6 h-6 mt-1" />
            <div>
              <p className="font-medium text-lg">4326 Walker Rd</p>
              <p className="text-muted-foreground">Windsor, ON N8W 3T5, Canada</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-primary w-6 h-6" />
            <a href="tel:+15193656680" className="text-lg font-medium hover:text-primary">+1 (519) 365-6680</a>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white">
              <a href="https://wa.me/15193656680?text=Hi%20Almast%2C%20I'd%20like%20to%20order..." target="_blank">
                Order via WhatsApp
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://maps.app.goo.gl/upSWskkdPEGgUqx48" target="_blank">
                <Navigation className="mr-2 h-4 w-4" /> Get Directions
              </a>
            </Button>
          </div>
        </div>
        <div className="h-96 w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Almast Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.689123456789!2d-82.987654!3d42.312345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2f1e12345678%3A0xabcdef1234567890!2s4326%20Walker%20Rd%2C%20Windsor%2C%20ON%20N8W%203T5!5e0!3m2!1sen!2sca!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}