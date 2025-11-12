"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navigation = [
  { id: 1, name: 'Campaigns', path: '/campaigns' },
  { id: 2, name: 'Digital', path: '/digital' },
  { id: 3, name: "Entertainment", path: '/entertainment' },
  { id: 4, name: 'For Good', path: '/for-good' },
]

const WorkHero = () => {
  const pathname = usePathname().split('/')[2]

  return (
    <div className="text-[#323232] pt-[140px] pb-10 text-center">
      <motion.h1
        className="text-[40px] min-[480px]:text-[64px] min-[480px]:leading-[72px] leading-[46px] font-black capitalize"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {pathname}
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center mt-20 gap-1 md:flex-row md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {navigation.map((item) => (
          <Link
            key={item.id}
            href={`/work${item.path}`}
            className={`text-[21px] transition-all duration-300 ${item.path === ('/' + pathname)
              ? 'font-bold hover:opacity-50'
              : 'opacity-60 hover:opacity-100'
              }`}
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    </div>
  )
}

export default WorkHero
