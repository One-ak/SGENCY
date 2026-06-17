import * as React from "react"
import { cn } from "@/lib/utils"

export type SectionProps = React.HTMLAttributes<HTMLElement>

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-12 md:py-24 lg:py-32", className)}
      {...props}
    >
      {children}
    </section>
  )
}
