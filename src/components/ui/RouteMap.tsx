interface RouteMapProps {
  className?: string
}

/**
 * Abstract route-network motif: a Bangkok-centered hub with dashed lines to
 * waypoints. Deliberately non-specific — no city names or flight numbers — so
 * it reads as the timetable/route-map world without implying real routes TIC
 * has not confirmed.
 */
export default function RouteMap({ className }: RouteMapProps) {
  const hub = { x: 300, y: 260 }
  const waypoints = [
    { x: 90, y: 120 },
    { x: 520, y: 90 },
    { x: 560, y: 320 },
    { x: 420, y: 430 },
    { x: 150, y: 420 },
    { x: 60, y: 280 },
  ]

  return (
    <svg viewBox="0 0 600 500" className={className} aria-hidden="true" fill="none">
      {/* latitude/longitude grid arcs, faint */}
      <ellipse cx={hub.x} cy={hub.y} rx="260" ry="90" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
      <ellipse cx={hub.x} cy={hub.y} rx="260" ry="180" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <line x1={hub.x} y1="20" x2={hub.x} y2="480" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />

      {waypoints.map((w, i) => (
        <g key={i}>
          <path
            d={`M ${hub.x} ${hub.y} Q ${(hub.x + w.x) / 2} ${(hub.y + w.y) / 2 - 40} ${w.x} ${w.y}`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="1 7"
            strokeLinecap="round"
          />
          <circle cx={w.x} cy={w.y} r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </g>
      ))}

      <circle cx={hub.x} cy={hub.y} r="7" className="fill-gold" />
      <circle cx={hub.x} cy={hub.y} r="13" fill="none" className="stroke-gold" strokeWidth="1.5" />
    </svg>
  )
}
