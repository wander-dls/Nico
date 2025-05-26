"use client"
import { navItems } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = () => {
    const pathname = usePathname()
  return (
    <nav className="flex items-center gap-4">
        {navItems.map(({label, href}) => (
            <Link key={label} href={href} className={cn(pathname === href && 'text-primary font-semibold')}>{label}</Link>
        ))}
    </nav>
  )
}
export default NavItems