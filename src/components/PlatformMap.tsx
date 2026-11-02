"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useState, type ReactNode } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

const positions: Record<string, { x: number; y: number }> = {
  abteilungen: { x: 50, y: 11 },
  dokumente: { x: 88, y: 38 },
  systeme: { x: 78, y: 86 },
  ki: { x: 22, y: 86 },
  prozesse: { x: 12, y: 38 },
};

function spokePath(x: number, y: number) {
  const dx = x - 50;
  const dy = y - 50;
  const len = Math.hypot(dx, dy) || 1;
  const trim = 7;
  const ex = 50 + (dx / len) * (len - trim);
  const ey = 50 + (dy / len) * (len - trim);
  return `M50 50 L${ex.toFixed(2)} ${ey.toFixed(2)}`;
}

function HubIcon({ id }: { id: string }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 18,
    height: 18,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    "aria-hidden": true as const,
  };

  const icons: Record<string, ReactNode> = {
    abteilungen: (
      <svg {...common}>
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    dokumente: (
      <svg {...common}>
        <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </svg>
    ),
    prozesse: (
      <svg {...common}>
        <path d="M4 7h10M14 7l-2-2M14 7l-2 2" />
        <path d="M20 17H10M10 17l2-2M10 17l2 2" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="6" cy="17" r="2" />
      </svg>
    ),
    systeme: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <path d="M7 10v4M17 10v4" />
      </svg>
    ),
    ki: (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </svg>
    ),
  };

  return icons[id] ?? null;
}

export function PlatformMap() {
  const { t } = useLocale();
  const uid = useId().replace(/:/g, "");
  const [openId, setOpenId] = useState<string | null>(null);
  const [beamIndex, setBeamIndex] = useState(0);
  const [beamTick, setBeamTick] = useState(0);
  const [reduced, setReduced] = useState(false);

  const branches = useMemo(
    () =>
      t.hub.branches.map((branch) => ({
        ...branch,
        ...positions[branch.id],
        path: spokePath(positions[branch.id].x, positions[branch.id].y),
      })),
    [t.hub.branches],
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced || branches.length === 0) return;
    const id = window.setInterval(() => {
      setBeamIndex((value) => (value + 1) % branches.length);
      setBeamTick((value) => value + 1);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduced, branches.length]);

  const activeBeam = branches[beamIndex];

  return (
    <figure className="hub-map">
      <div className="hub-map-mobile" aria-label="FLX">
        {branches.map((branch) => {
          const open = openId === branch.id;
          return (
            <details
              key={`mobile-${branch.id}`}
              className="hub-mobile-item"
              open={open}
              onToggle={(event) => {
                const el = event.currentTarget;
                if (el.open) setOpenId(branch.id);
                else setOpenId((current) => (current === branch.id ? null : current));
              }}
            >
              <summary>
                <span className="hub-node-icon">
                  <HubIcon id={branch.id} />
                </span>
                <span className="hub-node-title">{branch.title}</span>
              </summary>
              <ul className="hub-node-list">
                {branch.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          );
        })}
      </div>

      <div className="hub-map-stage" aria-hidden={false}>
        <div className="hub-map-atmosphere" aria-hidden="true" />

        <svg
          className="hub-map-beam"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`${uid}-beam`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0073ff" stopOpacity="0" />
              <stop offset="45%" stopColor="#5aa4ff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0073ff" stopOpacity="0.95" />
            </linearGradient>
            <filter id={`${uid}-glow`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle className="hub-ring" cx="50" cy="50" r="18" />
          <circle className="hub-ring hub-ring--mid" cx="50" cy="50" r="28" />
          <circle className="hub-ring hub-ring--outer" cx="50" cy="50" r="38" />

          {branches.map((branch) => (
            <path key={`spoke-${branch.id}`} className="hub-spoke" d={branch.path} />
          ))}

          {!reduced && activeBeam ? (
            <>
              <path
                key={`trail-${beamTick}`}
                className="hub-beam-trail"
                d={activeBeam.path}
                pathLength={1}
                stroke={`url(#${uid}-beam)`}
              />
              <path
                key={`head-${beamTick}`}
                className="hub-beam-head"
                d={activeBeam.path}
                pathLength={1}
                filter={`url(#${uid}-glow)`}
              />
            </>
          ) : null}
        </svg>

        <div className="hub-core" aria-hidden="true">
          <Image
            src="/brand/logo-mark-clear.png"
            alt=""
            width={220}
            height={220}
            className="hub-core-logo"
            priority
          />
        </div>

        {branches.map((branch) => {
          const open = openId === branch.id;
          const preview = branch.items.slice(0, 3);
          return (
            <div
              key={branch.id}
              className={`hub-point hub-point--${branch.id}${open ? " is-open" : ""}`}
              style={{ left: `${branch.x}%`, top: `${branch.y}%` }}
              onMouseEnter={() => setOpenId(branch.id)}
              onMouseLeave={() =>
                setOpenId((current) => (current === branch.id ? null : current))
              }
            >
              <button
                type="button"
                className="hub-node"
                aria-expanded={open}
                onFocus={() => setOpenId(branch.id)}
                onBlur={(event) => {
                  if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node)) {
                    setOpenId((current) => (current === branch.id ? null : current));
                  }
                }}
                onClick={() =>
                  setOpenId((current) => (current === branch.id ? null : branch.id))
                }
              >
                <span className="hub-node-icon">
                  <HubIcon id={branch.id} />
                </span>
                <span className="hub-node-copy">
                  <span className="hub-node-title">{branch.title}</span>
                  {!open ? (
                    <span className="hub-node-preview">{preview.join(" · ")}</span>
                  ) : (
                    <ul className="hub-node-list">
                      {branch.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </figure>
  );
}
