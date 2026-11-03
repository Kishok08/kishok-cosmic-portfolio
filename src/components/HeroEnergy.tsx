
export default function HeroEnergy() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="energy-line">
            <stop offset="0%" stopColor="#D6A64A" stopOpacity="0" />
            <stop offset="50%" stopColor="#F6D58A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D6A64A" stopOpacity="0" />
          </linearGradient>

          <filter id="energy-glow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Technical circuit paths */}
        <g
          fill="none"
          stroke="#D6A64A"
          strokeWidth="0.7"
          opacity="0.18"
        >
          <path d="M0 220 H350 L440 310 H750 L850 210 H1440" />
          <path d="M0 620 H280 L410 490 H760 L930 660 H1440" />
          <path d="M720 0 V160 L830 270 H1180 L1320 410 H1440" />
          <path d="M1440 110 H1120 L1010 220 V450 L850 610" />
        </g>

        {/* Moving energy pulses */}
        {[
          'M0 220 H350 L440 310 H750 L850 210 H1440',
          'M0 620 H280 L410 490 H760 L930 660 H1440',
          'M720 0 V160 L830 270 H1180 L1320 410 H1440',
        ].map((path, index) => (
          <path
            key={index}
            d={path}
            fill="none"
            stroke="url(#energy-line)"
            strokeWidth="2"
            strokeDasharray="90 1600"
            className="hero-energy-pulse"
            style={{
              animationDelay: `${index * -2.5}s`,
            }}
          />
        ))}

        {/* Circuit nodes */}
        {[
          [350, 220],
          [440, 310],
          [850, 210],
          [410, 490],
          [930, 660],
          [830, 270],
          [1010, 220],
        ].map(([x, y], index) => (
          <g key={index}>
            <circle
              cx={x}
              cy={y}
              r="8"
              fill="none"
              stroke="#D6A64A"
              strokeWidth="0.6"
              opacity="0.3"
            />
            <circle
              cx={x}
              cy={y}
              r="2"
              fill="#F7DB98"
              className="hero-energy-node"
              style={{
                animationDelay: `${index * 0.6}s`,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Atmospheric energy */}
      <div className="hero-energy-aura absolute right-[12%] top-[30%] h-72 w-72 rounded-full bg-amber-400/[0.07] blur-[90px]" />
    </div>
  )
}
