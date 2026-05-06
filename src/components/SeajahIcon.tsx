export default function SeajahIcon({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SeaJah icon"
    >
      {/* Left bar */}
      <rect x="4" y="10" width="14" height="40" rx="1" fill="currentColor" />
      {/* Center teal obelisk/diamond shape */}
      <polygon points="30,4 38,20 38,50 30,56 22,50 22,20" fill="#2DD4BF" />
      {/* Right bar */}
      <rect x="42" y="10" width="14" height="40" rx="1" fill="currentColor" />
    </svg>
  );
}
