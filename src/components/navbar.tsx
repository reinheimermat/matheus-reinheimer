'use client'

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

export function Navbar() {
    return (
        <nav className="container flex items-center justify-between py-8">
            <Link href={"/"} className="font-bold tracking-wider">Matheus Reinheimer</Link>
            <ul className="gap-8 items-center hidden md:flex">
                <li className="text-gray-500 hover:text-primary">
                    <Link href={"#about"}>About</Link>
                </li>
                <li className="text-gray-500 hover:text-primary">
                    <Link href={"#projects"}>Projects</Link>
                </li>
                <li className="text-gray-500 hover:text-primary">
                    <Link href={"#contact"}>Contato</Link>
                </li>
            </ul>
            <DropdownMenu>
                <DropdownMenuTrigger className="md:hidden"><Menu/></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>
                        <Link href="/" className="font-bold tracking-wider">Matheus Reinheimer</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href={"#about"}>About</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"#projects"}>Projects</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"#contact"}>Contact</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <ThemeToggle /> <p className="ps-2">Change Theme</p>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="hidden md:block">
                <ThemeToggle />
            </div>  
        </nav>
    )
}