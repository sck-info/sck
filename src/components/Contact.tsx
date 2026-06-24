import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

const contactItems = [
  {
    icon: Mail,
    label: "sharathchandra.kancherla@gmail.com",
    href: "mailto:sharathchandra.kancherla@gmail.com",
  },
  { icon: Phone, label: "+91 9700477529", href: "tel:+919700477529" },
  { icon: MapPin, label: "Hyderabad, Telangana", href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-stone py-20 sm:py-28 bg-paper">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink-soft bg-stone-light px-3 py-1 rounded">
              Contact
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Questions before you <span className="font-serif italic font-normal">register</span>?
            </h2>
            <p className="mt-4 max-w-prose text-xs sm:text-sm leading-relaxed text-ink-soft">
              Reach out directly and I&apos;ll help you understand which therapy, reading, or workshop align best with your wellness goals.
            </p>
          </div>

          <div className="lg:col-span-6 border border-stone p-8 bg-stone-light/20 flex flex-col gap-6">
            <h3 className="font-display text-xl font-medium text-ink">Get in <span className="font-serif italic font-normal">Touch</span></h3>
            <ul className="flex flex-col gap-5">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3.5 border-b border-stone/50 pb-3 last:border-b-0 last:pb-0">
                  <div className="p-2 border border-stone bg-paper text-ink rounded-none shrink-0">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-xs font-poppins tracking-tight text-ink hover:underline hover:opacity-85 transition-all"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-xs font-poppins tracking-tight text-ink">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
