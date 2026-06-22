"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { Session } from "@/types/session";

type SessionCardProps = {
  session: Session;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
};

export default function SessionCard({
  session,
  isHovered,
  isAnyHovered,
  onHover,
  onLeave,
}: SessionCardProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `${session.id}-additional-info`;

  return (
    <div
      id={session.id}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`flex flex-col justify-between border bg-paper p-6 sm:p-8 transition-all duration-500 ease-out h-full relative ${
        isHovered
          ? "border-ink -translate-y-3 shadow-xl z-20 scale-[1.03]"
          : isAnyHovered
          ? "border-stone/60 opacity-30 blur-[1px] scale-[0.97]"
          : "border-stone"
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap gap-1.5">
          {session.duration && (
            <span className="text-[9px] uppercase tracking-wider font-bold bg-stone-light text-ink px-2.5 py-0.5 rounded-full">
              {session.duration}
            </span>
          )}
          {session.mode && (
            <span className="text-[9px] uppercase tracking-wider font-bold border border-stone text-ink px-2.5 py-0.5 rounded-full">
              {session.mode}
            </span>
          )}
          {session.format && (
            <span className="text-[9px] uppercase tracking-wider font-bold text-ink-soft bg-paper border border-stone/50 px-2.5 py-0.5 rounded-full">
              {session.format}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-ink">
          {session.name}
        </h3>

        {/* SubDetails (e.g. designed for working professionals) */}
        {session.subDetails && (
          <p className="mt-1 text-[11px] font-mono tracking-tight text-ink-soft/90">
            {session.subDetails}
          </p>
        )}

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-ink-soft">
          {session.description}
        </p>

        {/* Read More Accordion */}
        {session.additionalInfo && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              aria-controls={panelId}
              className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-ink hover:opacity-85 transition-opacity"
            >
              {expanded ? "Less Details" : "More Details"}
              <ChevronDown
                className={`h-3 w-3 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id={panelId}
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                expanded
                  ? "grid-rows-[1fr] opacity-100 mt-2.5"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="border-l-2 border-ink pl-3 text-xs leading-relaxed text-ink-soft font-light italic">
                  {session.additionalInfo}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
