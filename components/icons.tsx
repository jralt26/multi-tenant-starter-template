"use client"

import { Loader2 } from "lucide-react"

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  spinner: Loader2,
  google: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m2 12 10-5 10 5-10 5z" />
      <path d="M12 2v20" />
      <path d="M12 12 2 7" />
      <path d="m12 12 10-5" />
      <path d="m2 17 10-5 10 5" />
    </svg>
  )
} 