import { Facebook, Instagram, SquareSplitHorizontal } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-[#323232] text-[#fff9] py-5 text-[12px]">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p>© 2020 BIG KAHUNA FILMS</p>
          <div className="flex items-center gap-2.5">
            <Link href="/legal/privacy-policy">Privacy</Link>
            <Link href="/legal/cookie-policy">Cookies</Link>
          </div>
          <div className='flex gap-2'>
            <div className='w-[25px] h-[25px] text-gray-300 border border-gray-300 hover:border-gray-400/40 hover:text-gray-400/60 flex items-center justify-center rounded-full cursor-pointer transition-colors'>
              <SquareSplitHorizontal size={14} />
            </div>
            <div className='w-[25px] h-[25px] text-gray-300 border border-gray-300 hover:border-gray-400/40 hover:text-gray-400/60 flex items-center justify-center rounded-full cursor-pointer transition-colors'>
              <Instagram size={14} />
            </div>
            <div className='w-[25px] h-[25px] text-gray-300 border border-gray-300 hover:border-gray-400/40 hover:text-gray-400/60 flex items-center justify-center rounded-full cursor-pointer transition-colors'>
              <Facebook size={14} />
            </div>
          </div>
        </div>
        <Link href={'https://www.spurwing.co.uk/'}>Site by Spurwing</Link>
      </div>
    </div>

  )
}

export default Footer