"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="top" className="relative pb-24 pt-20 sm:pt-28 sm:pb-36 bg-paper overflow-hidden">
      {/* Fine architectural thin line accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone" />
      
      {/* Side line accents to frame the "aura" of the page */}
      <div className="absolute left-[5%] top-0 h-full w-[1px] bg-stone/20 hidden xl:block" />
      <div className="absolute right-[5%] top-0 h-full w-[1px] bg-stone/20 hidden xl:block" />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Centered Luxury Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3.5 mb-10">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-ink-soft bg-stone-light/60 px-4.5 py-1.5 border border-stone">
              EST. 2012 / HOLISTIC MENTOR
            </span>
          </motion.div>

          {/* Centered Gigantic Headline (Luxury Editorial Brand Aura) */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl">
            <h1 className="font-display text-4xl sm:text-7xl font-light tracking-tight leading-[1.02] text-ink">
              SHARATH CHANDRA <br />
              <span className="font-serif italic font-normal text-3xl sm:text-6xl text-ink-soft/90 block mt-2">
                &ldquo;A space for the body to remember how to rest.&rdquo;
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="w-16 h-[1px] bg-ink my-12" />

          {/* Asymmetric Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full mt-4">
            
            {/* Left Portrait Column (Classy, Framed, Grayscale-to-Color) */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col gap-3 group w-full"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-stone/40 bg-stone-light/20 shadow-[0_12px_24px_rgba(0,0,0,0.015),inset_0_2px_6px_rgba(0,0,0,0.02)] p-3.5">
                <div className="relative w-full h-full overflow-hidden border border-stone/20">
                  <Image
                    src="/images/profile-hero1.jpeg"
                    alt="Portrait of Sharath Chandra Kancherla"
                    fill
                    priority
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 35vw, 90vw"
                  />
                </div>
              </div>
              <div className="flex justify-between px-1 text-[9px] font-mono tracking-widest text-ink-soft/75 uppercase">
                <span>[ PORTRAIT.01 ]</span>
                <span>SHARATH CHANDRA KANCHERLA</span>
              </div>
            </motion.div>
 
            {/* Right Biography & CTA Column */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-7 flex flex-col items-start gap-8"
            >
              <div className="border-l border-stone pl-6 py-2">
                <p className="text-xs uppercase tracking-[0.25em] font-bold text-ink mb-2">
                  Healing. Wisdom. Music.
                </p>
                <p className="text-sm leading-relaxed text-ink-soft font-light max-w-xl">
                  Empowering individuals with practical tools for holistic well-being through biodynamic touch, traditional Japanese bodywork, therapeutic music, and celestial chart consultations. Spreading compassion and timeless values to live as one global family.
                </p>
              </div>
 
              {/* Core Pillars List */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 font-mono text-[10px] uppercase tracking-widest text-ink-soft/95">
                <span>CST Therapy</span>
                <span className="text-stone/50 select-none">/</span>
                <span>Rakkenho bodywork</span>
                <span className="text-stone/50 select-none">/</span>
                <span>Sound therapy</span>
                <span className="text-stone/50 select-none">/</span>
                <span>Vedic astrology</span>
              </div>

              {/* Classy Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                <a
                  href="#sessions"
                  className="group inline-flex items-center justify-center gap-3.5 bg-ink text-paper px-10 py-5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 shadow-sm border border-ink"
                >
                  Explore Offerings
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center bg-transparent text-ink px-10 py-5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-stone-light hover:-translate-y-0.5 active:translate-y-0 border border-stone"
                >
                  Read Biography
                </a>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </Container>
    </section>
  );
}
