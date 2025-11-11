import { AnimatePresence, motion } from "framer-motion"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<nav className="absolute top-0 left-0 w-full flex justify-between items-center gap-5 px-5 md:px-10 py-[30px] z-20">
				<Link href={'/'} className="relative w-[200px] min-[480px]:w-[300px] h-[30px]">
					<Image
						src="/logo.svg"
						fill
						alt="Logo"
						className="w-4"
					/>
				</Link>

				<ul className="hidden lg:flex text-white font-medium text-base">
					<li className="uppercase cursor-pointer mx-5 tracking-widest leading-3.5">Work</li>
					<li className="uppercase cursor-pointer mx-5 tracking-widest leading-3.5">About</li>
					<li className="uppercase cursor-pointer mx-5 tracking-widest leading-3.5">News</li>
					<li className="uppercase cursor-pointer mx-5 tracking-widest leading-3.5">Contact</li>
				</ul>

				<div className="lg:hidden text-white cursor-pointer" onClick={() => setIsOpen(true)}>
					<Menu size={28} />
				</div>
			</nav>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ y: '-100%' }}
						animate={{ y: 0 }}
						exit={{ y: '-100%' }}
						transition={{ duration: 0.4 }}
						className="absolute top-0 left-0 w-full h-screen bg-[#323232] flex flex-col justify-center items-center z-30 space-y-8 text-white text-2xl font-bold"
					>
						<button className="absolute top-6 right-6 text-3xl" onClick={() => setIsOpen(false)}>
							✕
						</button>
						<div className="flex flex-col items-center space-y-8">
							<a href="#work" onClick={() => setIsOpen(false)}>Work</a>
							<a href="#about" onClick={() => setIsOpen(false)}>About</a>
							<a href="#news" onClick={() => setIsOpen(false)}>News</a>
							<a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default Navbar