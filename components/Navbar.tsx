import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="bg-slate-500 flex items-center justify-evenly p-4">
            <Link href="/" className="font-bold text-slate-950">
                Home
            </Link>

            <ul className="font-bold text-slate-950">
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}