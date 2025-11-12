"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = ({ light = false }: { light?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className={`absolute top-0 left-0 w-full flex justify-between items-center gap-5 px-5 md:px-10 py-5 md:py-[30px] z-20 ${light ? 'text-[#323232]' : 'text-white'}`}>
        <Link href={'/'} className="relative w-[200px] min-[480px]:w-[300px] h-[30px] flex items-center">
          {
            light ? (
              <Image
                src="https://cdn.prod.website-files.com/62a0be23da2f1f04a6f5c1aa/62a0be23da2f1f5016f5c1d6_BKF%20Logo%20Charcoal.svg"
                alt="Logo"
                width={260}
                height={16}
              />
            ) : (
              <Image
                src="/logo.svg"
                alt="Logo"
                width={260}
                height={16}
              />
            )
          }
        </Link>

        <ul className="hidden lg:flex font-medium text-sm">
          <li className="uppercase cursor-pointer px-5 tracking-widest leading-3.5"><Link href={'/work/campaigns'}>Work</Link></li>
          <li className="uppercase cursor-pointer px-5 tracking-widest leading-3.5"><Link href={'/about'}>About</Link></li>
          <li className="uppercase cursor-pointer px-5 tracking-widest leading-3.5"><Link href={'/news'}>News</Link></li>
          <li className="uppercase cursor-pointer px-5 tracking-widest leading-3.5"><Link href={'/contact'}>Contact</Link></li>
        </ul>

        <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
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
              <Link href="/work/campaigns" onClick={() => setIsOpen(false)}>Work</Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/news" onClick={() => setIsOpen(false)}>News</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar