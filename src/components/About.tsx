import Container from "@/components/ui/Container";

const credentials = [
  "Life skills Facilitator & Breath Expert",
  "Diploma + double PG in Biodynamic CranioSacral Therapy",
  "Advanced Rakkenho & Music Therapist",
  "S-VYASA Certified Music Therapist",
  "NLP Master Practitioner & Research Astrologer",
  "Professional Singer & Vocalist",
];

export default function About() {
  return (
    <section id="about" className="border-t border-stone py-24 sm:py-32 bg-paper relative">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Bio Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-1 bg-ink" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink-soft">
                  Biography
                </span>
              </div>
              <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                A practice built on <span className="font-serif italic font-normal">deep listening</span> and timeless wisdom.
              </h2>
              
              <p className="mt-8 text-sm leading-relaxed text-ink-soft font-light">
                As a Holistic Wellness and Mind Coach, I have dedicated over a decade to helping individuals restore physical health and find emotional balance. Having touched more than 1.5 lakh lives across 10+ countries, my work integrates the restorative power of sound, hands-on biodynamic touch, and cosmic alignments to bring profound peace.
              </p>
              
              <p className="mt-4 text-sm leading-relaxed text-ink-soft font-light">
                I have trained over 30,000 corporate professionals from global organizations like Infosys, IBM, Microsoft, Google, Cognizant, TCS, and BIDCO Africa in stress-management, yoga, and purposeful living.
              </p>
            </div>

            <div className="mt-12 border-t border-stone pt-8">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink-soft">Inspiration</span>
              <p className="mt-3 font-display text-xl font-medium text-ink leading-snug">
                &ldquo;My work and life find their path in the grace and guidance of <a href="https://gurudev.artofliving.org/" target="_blank" rel="noopener noreferrer" className="font-serif italic text-2xl hover:underline decoration-clay">Gurudev Sri Sri Ravi Shankar</a>.&rdquo;
              </p>
            </div>
          </div>

          {/* Vision/Mission/Credentials Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Vision and Mission Frame */}
            <div className="border border-ink p-8 bg-paper relative">
              <div className="absolute top-0 right-0 bg-ink text-paper text-[8px] uppercase tracking-widest font-bold px-3 py-1">
                Foundations
              </div>
              
              <div className="mb-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink mb-3">Our Vision</h3>
                <p className="text-xs leading-relaxed text-ink-soft font-light">
                  To inspire and uplift one billion lives through healing, wisdom, music, and conscious living—nurturing a world that lives as one global family.
                </p>
              </div>

              <div className="border-t border-stone pt-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink mb-3">Our Mission</h3>
                <p className="text-xs leading-relaxed text-ink-soft font-light">
                  To empower individuals with practical tools for holistic well-being through meditation, yoga, breathwork, music, education, and timeless wisdom, enabling them to live healthier, happier, and more purposeful lives.
                </p>
              </div>
            </div>

            {/* Credentials Frame */}
            <div className="border border-stone p-8 bg-stone-light/10">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink mb-4">Credentials &amp; Expertise</h3>
              <ul className="space-y-4">
                {credentials.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-ink-soft leading-normal">
                    <span className="text-ink font-mono text-[10px] mt-0.5 select-none">[{idx + 1}]</span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
