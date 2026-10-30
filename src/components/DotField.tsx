"use client";

import { useEffect, useId, useState } from "react";

type Node = { id: string; x: number; y: number };
type Route = { id: string; d: string; from: string; to: string };

/** Vereinfachte Kontinente im blankmile-Stil (viewBox 1000×500). */
const landPaths = [
  "M72 112 94 87 133 78 157 58 205 52 231 69 260 65 282 82 304 90 309 111 292 127 278 150 262 162 248 180 220 191 209 214 193 216 187 202 169 195 164 180 141 171 126 147 106 141 93 124Z M188 213 206 218 214 237 234 245 252 253 259 268 247 270 231 258 215 254 201 237Z M263 221 279 220 293 229 280 233Z",
  "M303 46 326 30 369 24 391 38 380 61 363 80 348 100 331 92 318 72Z",
  "M263 269 286 252 307 257 327 269 345 282 367 292 373 314 359 334 343 348 335 374 319 399 305 427 295 446 283 435 283 414 271 393 269 369 257 349 246 320 249 292Z",
  "M461 155 477 143 491 144 504 134 522 143 531 158 516 170 498 170 488 181 468 178 455 166Z M493 132 498 112 514 89 530 80 537 93 521 114 513 136Z M463 124 469 137 466 151 457 150 454 136Z",
  "M479 187 505 181 531 192 549 211 555 237 575 250 591 249 577 270 562 284 553 317 538 343 522 362 506 357 496 337 485 311 483 289 467 280 450 263 448 237 456 211Z M585 317 594 305 598 321 590 344 580 350 580 333Z",
  "M530 144 545 123 542 100 570 89 595 71 629 67 652 51 681 58 707 48 738 56 762 50 785 69 813 64 841 79 865 78 899 99 923 106 919 119 894 125 878 141 858 146 844 161 825 172 812 193 791 201 778 226 762 226 749 209 732 213 719 233 708 255 695 261 681 241 673 215 654 206 641 208 631 198 617 204 601 191 584 185 567 171 545 170Z M551 210 573 201 590 215 610 226 602 240 580 248 568 232Z",
  "M807 367 828 355 846 355 860 337 870 348 875 367 897 371 913 389 917 410 902 428 882 429 868 418 846 421 826 430 808 419 798 397Z",
];

const nodes: Node[] = [
  { id: "a", x: 202, y: 166 },
  { id: "b", x: 506, y: 151 },
  { id: "c", x: 800, y: 205 },
  { id: "d", x: 303, y: 321 },
  { id: "e", x: 530, y: 322 },
  { id: "f", x: 864, y: 393 },
];

const routes: Route[] = [
  { id: "r1", from: "a", to: "b", d: "M202 166 Q338 40 506 151" },
  { id: "r2", from: "f", to: "c", d: "M864 393 Q899 251 800 205" },
  { id: "r3", from: "d", to: "a", d: "M303 321 Q174 286 202 166" },
  { id: "r4", from: "e", to: "c", d: "M530 322 Q643 179 800 205" },
  { id: "r5", from: "b", to: "e", d: "M506 151 Q576 228 530 322" },
];

export function DotField() {
  const uid = useId().replace(/:/g, "");
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % routes.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [reduced]);

  const route = routes[active];

  return (
    <div className="dot-field" aria-hidden="true">
      <svg
        className="dot-field-svg"
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern
            id={`${uid}-dots`}
            width="7"
            height="7"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3.5" cy="3.5" r="1.05" fill="#b9c6d4" />
          </pattern>
          <linearGradient id={`${uid}-beam`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8eb8ff" stopOpacity="0" />
            <stop offset="55%" stopColor="#7eb0ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#4d8fff" stopOpacity="0.95" />
          </linearGradient>
          <filter id={`${uid}-tip`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="dot-land" fill={`url(#${uid}-dots)`}>
          {landPaths.map((d, index) => (
            <path key={index} d={d} />
          ))}
        </g>

        {!reduced ? (
          <g key={`${route.id}-${active}`}>
            <path
              className="dot-signal-trail"
              d={route.d}
              pathLength={1}
              stroke={`url(#${uid}-beam)`}
            />
            <path
              className="dot-signal-head"
              d={route.d}
              pathLength={1}
              filter={`url(#${uid}-tip)`}
            />
          </g>
        ) : null}

        {nodes.map((node) => (
          <g key={node.id}>
            <circle className="dot-node-ring" cx={node.x} cy={node.y} r="7" />
            <circle className="dot-node" cx={node.x} cy={node.y} r="2.4" />
          </g>
        ))}
      </svg>
    </div>
  );
}
