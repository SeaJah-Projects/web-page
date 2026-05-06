export default function SeajahLogo({ className = "", height = 32 }: { className?: string; height?: number }) {
  return (
    <svg
      height={height}
      viewBox="0 0 340 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SeaJah"
    >
      {/* S */}
      <path d="M0 0h32v12H12v12h20v36H0V48h20V36H0V0z" fill="currentColor" />
      {/* E represented as two horizontal bars + teal arrow */}
      <rect x="40" y="8" width="28" height="10" fill="currentColor" opacity="0.8" />
      <rect x="40" y="42" width="28" height="10" fill="currentColor" opacity="0.8" />
      {/* Teal arrow/chevron */}
      <polygon points="54,18 80,30 54,42 62,30" fill="#2DD4BF" />
      {/* A */}
      <path d="M94 0h20l20 60h-14l-4-12h-24l-4 12H74L94 0zm10 16l-8 24h16l-8-24z" fill="currentColor" />
      {/* J */}
      <path d="M140 0h14v48c0 8-6 14-14 14h-12V50h8c3 0 4-1 4-4V0z" fill="currentColor" />
      {/* A (second) */}
      <path d="M168 0h20l20 60h-14l-4-12h-24l-4 12H148l20-60zm10 16l-8 24h16l-8-24z" fill="currentColor" />
      {/* H */}
      <path d="M214 0h14v24h20V0h14v60h-14V36h-20v24h-14V0z" fill="currentColor" />
    </svg>
  );
}
