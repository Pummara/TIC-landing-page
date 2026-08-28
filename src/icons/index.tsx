import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M8 12.5l2.5 2.5L16 9" />
    </svg>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 3l7 3v5.2c0 4.6-2.98 8.4-7 9.8-4.02-1.4-7-5.2-7-9.8V6l7-3z" />
      <path d="M8.75 12.25l2.25 2.25 4.25-4.5" />
    </svg>
  )
}

export function UserBadgeIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="12" cy="8.25" r="3.25" />
      <path d="M5.5 20c1.2-3.4 3.9-5.25 6.5-5.25S17.3 16.6 18.5 20" />
    </svg>
  )
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M13 3L5.5 13.5H11L10.5 21L18.5 10H13L13 3z" strokeLinejoin="round" />
    </svg>
  )
}

export function DiamondIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M6 4h12l3 5-9 11L3 9l3-5z" strokeLinejoin="round" />
      <path d="M3 9h18M9 4l-1.5 5L12 20l4.5-11L15 4" />
    </svg>
  )
}

export function AirplaneIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path
        d="M13.5 3.5c.6 0 1.1.5 1.1 1.2v5l6 3.6v2l-6-1.7v3.9l2 1.4v1.7l-3.6-1.1-3.6 1.1v-1.7l2-1.4v-3.9l-6 1.7v-2l6-3.6v-5c0-.7.5-1.2 1.1-1.2z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PassportIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <rect x="4.5" y="3" width="15" height="18" rx="1.5" />
      <circle cx="12" cy="10.5" r="3" />
      <path d="M9 15.5h6M8 18.5h8" />
    </svg>
  )
}

export function CarIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M4.5 16.5V13l2-5h11l2 5v3.5" strokeLinejoin="round" />
      <path d="M3.5 16.5h17v2.25a1 1 0 01-1 1h-1.25a1 1 0 01-1-1V17.5h-10.5v1.25a1 1 0 01-1 1H4.5a1 1 0 01-1-1V16.5z" />
      <circle cx="7.5" cy="16.5" r="1.4" />
      <circle cx="16.5" cy="16.5" r="1.4" />
    </svg>
  )
}

export function HotelIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M5 21V6.5L12 3l7 3.5V21" strokeLinejoin="round" />
      <path d="M5 21h14M9 21v-4.5h6V21M9.5 9.5h1.2M13.3 9.5h1.2M9.5 12.5h1.2M13.3 12.5h1.2" />
    </svg>
  )
}

export function MedalIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="12" cy="14.5" r="5.25" />
      <path d="M9.5 10.2L7 3.5h3l2 5M14.5 10.2L17 3.5h-3l-2 5" strokeLinejoin="round" />
      <path d="M12 12v5M10 16h4" />
    </svg>
  )
}

export function CertificateIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <rect x="3.5" y="4" width="17" height="12" rx="1.25" />
      <path d="M6.5 7.5h11M6.5 10.25h7.5" />
      <circle cx="9.5" cy="19" r="1.9" />
      <path d="M8 20.6L6.75 23l2.75-1.2L12.25 23 11 20.6" />
    </svg>
  )
}

export function ClipboardShieldIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <rect x="5" y="4.5" width="14" height="16.5" rx="1.5" />
      <path d="M9 4.5V3.5a1 1 0 011-1h4a1 1 0 011 1v1" />
      <path d="M9.5 12l2 2 3-3.2" />
    </svg>
  )
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M4.5 13v-1a7.5 7.5 0 0115 0v1" />
      <rect x="3.25" y="12.5" width="3.5" height="5.5" rx="1.25" />
      <rect x="17.25" y="12.5" width="3.5" height="5.5" rx="1.25" />
      <path d="M19 18v.75a2.75 2.75 0 01-2.75 2.75H13" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M6.6 3.5h2.3l1.4 4.1-1.9 1.6a12.5 12.5 0 006.4 6.4l1.6-1.9 4.1 1.4v2.3c0 1-.85 1.75-1.85 1.6A16.7 16.7 0 015 5.35c-.15-1 .6-1.85 1.6-1.85z" strokeLinejoin="round" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4.5 6.5l7.5 6.5 7.5-6.5" />
    </svg>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 21s-6.75-6.1-6.75-11.25a6.75 6.75 0 0113.5 0C18.75 14.9 12 21 12 21z" strokeLinejoin="round" />
      <circle cx="12" cy="9.75" r="2.25" />
    </svg>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}
