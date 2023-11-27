'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ActiveLink({ href, name }) {
    // Esse Hook pega a rota que o usuario está no momento
    const pathnName = usePathname()
    const isActive = pathnName === href

    return(
        <Link href={href} className={`w-full bg-300 h-full flex justify-center items-center 
        ${isActive ? 'bg-red-500 w-full text-center rounded-md' : ''} `}>
            {name}
        </Link>
    )
}